# Indian GSTIN Specification & Luhn Mod-36 Checksum Reference

## 1. 15-Character Anatomy
```
[0-9]{2} [A-Z]{5} [0-9]{4} [A-Z]{1} [1-9A-Z]{1} Z [0-9A-Z]{1}
Position 1-2: State Code (01-38, 97, 99)
Position 3-12: 10-digit PAN (Char 4 is entity type: C, P, H, F, A, T, B, L, J, G)
Position 13: Entity Registration count (1-9, A-Z)
Position 14: Fixed letter 'Z'
Position 15: Check digit (Luhn Mod-36)
```

## 2. Checksum Algorithm (TypeScript)
```typescript
export function validateGstinChecksum(gstinRaw: string): boolean {
  if (!gstinRaw || gstinRaw.length !== 15) return false;
  const gstin = gstinRaw.trim().toUpperCase();
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let totalSum = 0;

  for (let i = 0; i < 14; i++) {
    const codePoint = chars.indexOf(gstin[i]);
    if (codePoint === -1) return false;
    const multiplier = (i % 2 === 0) ? 1 : 2;
    const product = codePoint * multiplier;
    totalSum += Math.floor(product / 36) + (product % 36);
  }

  const checkCode = (36 - (totalSum % 36)) % 36;
  return gstin[14] === chars[checkCode];
}
```
