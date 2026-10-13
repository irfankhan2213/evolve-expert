#!/usr/bin/env python3
"""
Enterprise Skills Validation Suite.
Audits all skills against the ConardLi/garden-skills architectural standard.
"""

import os
import sys
import json
import re

SKILLS_DIR = os.path.join(os.path.dirname(__file__), "..", ".agents", "skills")
ROUTER_PATH = os.path.join(SKILLS_DIR, "router.json")

EXPECTED_SKILLS = [
    "web-design-engineer",
    "production-fullstack-dev",
    "growth-marketing-engine",
    "fintech-revenue-ops",
    "qa-security-auditor",
    "rapidapi-marketplace-ops"
]

def parse_frontmatter(content):
    match = re.match(r"^---\n(.*?)\n---\n(.*)", content, re.DOTALL)
    if not match:
        return None, content
    fm_raw = match.group(1)
    body = match.group(2)
    fm = {}
    for line in fm_raw.split("\n"):
        if ":" in line:
            k, v = line.split(":", 1)
            fm[k.strip()] = v.strip().strip('"').strip("'")
    return fm, body

def audit_skill(skill_name):
    skill_path = os.path.join(SKILLS_DIR, skill_name)
    if not os.path.isdir(skill_path):
        return False, f"Missing directory: {skill_name}"

    skill_file = os.path.join(skill_path, "SKILL.md")
    manifest_file = os.path.join(skill_path, "manifest.json")
    ref_dir = os.path.join(skill_path, "references")

    # 1. SKILL.md check
    if not os.path.isfile(skill_file):
        return False, f"{skill_name} missing SKILL.md"
    with open(skill_file, "r", encoding="utf-8") as f:
        content = f.read()
    fm, body = parse_frontmatter(content)
    if not fm or "name" not in fm or "description" not in fm:
        return False, f"{skill_name} SKILL.md missing valid YAML frontmatter"
    if len(body.strip()) < 100:
        return False, f"{skill_name} SKILL.md body too short (<100 chars)"

    # 2. manifest.json check
    if not os.path.isfile(manifest_file):
        return False, f"{skill_name} missing manifest.json"
    try:
        with open(manifest_file, "r", encoding="utf-8") as f:
            manifest = json.load(f)
        for key in ["name", "version", "category", "description"]:
            if key not in manifest:
                return False, f"{skill_name} manifest.json missing key '{key}'"
    except Exception as e:
        return False, f"{skill_name} manifest.json invalid JSON: {e}"

    # 3. references/ check
    if not os.path.isdir(ref_dir):
        return False, f"{skill_name} missing references/ directory"
    ref_files = [f for f in os.listdir(ref_dir) if f.endswith(".md")]
    if not ref_files:
        return False, f"{skill_name} references/ directory has no markdown files"

    return True, f"SKILL.md ({len(content)} bytes), manifest.json, {len(ref_files)} reference doc(s)"

def main():
    print("================================================================================")
    print("            ENTERPRISE SKILLS AUDIT SUITE (GARDEN-SKILLS COMPLIANCE)            ")
    print("================================================================================")
    
    # Audit Router
    if not os.path.isfile(ROUTER_PATH):
        print("❌ FAIL: router.json not found!")
        sys.exit(1)
    
    with open(ROUTER_PATH, "r", encoding="utf-8") as f:
        router = json.load(f)
    print(f"✅ PASS: router.json valid ({len(router.get('skills', []))} skills registered)")
    
    all_passed = True
    total_skill_bytes = 0

    for s_name in EXPECTED_SKILLS:
        passed, msg = audit_skill(s_name)
        if passed:
            print(f"✅ PASS: {s_name:<26} -> {msg}")
            s_file = os.path.join(SKILLS_DIR, s_name, "SKILL.md")
            total_skill_bytes += os.path.getsize(s_file)
        else:
            print(f"❌ FAIL: {s_name:<26} -> {msg}")
            all_passed = False

    print("--------------------------------------------------------------------------------")
    router_bytes = os.path.getsize(ROUTER_PATH)
    est_router_tokens = router_bytes // 4
    est_full_tokens = (total_skill_bytes + 20000) // 4
    savings_pct = ((est_full_tokens - est_router_tokens) / est_full_tokens) * 100

    print(f"📊 Token Telemetry:")
    print(f"   • Router Idle Footprint:     ~{est_router_tokens} tokens ({router_bytes} bytes)")
    print(f"   • Full Skills + References:  ~{est_full_tokens} tokens")
    print(f"   • Context Token Savings:     {savings_pct:.1f}% reduction when idle")
    print("================================================================================")

    if not all_passed:
        sys.exit(1)
    print("🏆 ALL SKILLS SATISFY GARDEN-SKILLS ARCHITECTURAL CRITERIA.")

if __name__ == "__main__":
    main()
