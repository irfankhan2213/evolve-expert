#!/usr/bin/env python3
"""
Token-Saving Skill Router CLI for DocuPulse Enterprise Suite.
Enables instant lookup and lazy loading of deep skills without bloating LLM context.
"""

import sys
import json
import os
import argparse

ROUTER_PATH = os.path.join(os.path.dirname(__file__), "..", ".agents", "skills", "router.json")

def load_router():
    with open(ROUTER_PATH, "r", encoding="utf-8") as f:
        return json.load(f)

def list_skills():
    data = load_router()
    print("================================================================================")
    print("                 DOCUPULSE ENTERPRISE SKILLS REGISTRY (TWO-TIER ROUTER)          ")
    print("================================================================================")
    print(f"{'ID':<26} | {'CATEGORY':<20} | {'ASSIGNED AGENT':<18}")
    print("-" * 80)
    for s in data.get("skills", []):
        print(f"{s['id']:<26} | {s['category']:<20} | {s['assignedAgent']:<18}")
    print("================================================================================")

def match_skill(query):
    data = load_router()
    query_lower = query.lower()
    matches = []
    for s in data.get("skills", []):
        score = 0
        if query_lower in s["id"].lower():
            score += 5
        if query_lower in s["name"].lower():
            score += 4
        if any(query_lower in kw.lower() or kw.lower() in query_lower for kw in s.get("keywords", [])):
            score += 3
        if any(w in s["trigger"].lower() for w in query_lower.split()):
            score += 2
        if score > 0:
            matches.append((score, s))
    
    matches.sort(key=lambda x: x[0], reverse=True)
    if not matches:
        print(f"No skill matched for query: '{query}'")
        return None
    
    top = matches[0][1]
    print(f"Matched Skill: {top['id']} (Agent: {top['assignedAgent']})")
    print(f"Trigger: {top['trigger']}")
    print(f"Path: {top['path']}")
    return top

def get_skill(skill_id, section=None):
    data = load_router()
    skill = next((s for s in data.get("skills", []) if s["id"] == skill_id), None)
    if not skill:
        print(f"Error: Skill '{skill_id}' not found in registry.")
        sys.exit(1)
    
    base_dir = os.path.dirname(os.path.join(os.path.dirname(__file__), "..", skill["path"]))
    skill_file = os.path.join(base_dir, "SKILL.md")
    
    if not section:
        with open(skill_file, "r", encoding="utf-8") as f:
            print(f.read())
    else:
        ref_path = os.path.join(base_dir, "references", f"{section}.md")
        if os.path.exists(ref_path):
            with open(ref_path, "r", encoding="utf-8") as f:
                print(f.read())
        else:
            print(f"Section/reference '{section}' not found in {ref_path}")

def main():
    parser = argparse.ArgumentParser(description="Two-Tier Token Saving Skill Router")
    subparsers = parser.add_subparsers(dest="command")

    subparsers.add_parser("list", help="List all skills in registry")
    
    match_parser = subparsers.add_parser("match", help="Match a skill by intent or keyword")
    match_parser.add_argument("query", help="Query or task description")

    get_parser = subparsers.add_parser("get", help="Retrieve skill or reference content")
    get_parser.add_argument("skill_id", help="ID of the skill")
    get_parser.add_argument("--section", "-s", help="Specific reference section to load")

    args = parser.parse_args()

    if args.command == "list" or not args.command:
        list_skills()
    elif args.command == "match":
        match_skill(args.query)
    elif args.command == "get":
        get_skill(args.skill_id, args.section)

if __name__ == "__main__":
    main()
