# hx-secrets-cli architecture

```
src/
  detectors/
    providers/     # 40+ provider-specific detector modules
    registry.ts    # Aggregates all detectors
    types.ts
  engine/          # scan-content, entropy
  scanner/         # directory walker
  reporters/       # SARIF, JSON
  cli.ts
```

Regenerate provider stubs: `node ../scripts/expand-secrets-detectors.mjs`
