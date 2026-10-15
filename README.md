# hx-secrets-cli

**High-signal secret and credential discovery** for repositories, dumps, and CI
artifacts — provider-specific detectors with SARIF and CI gate support.

## Why this exists

Leaked API keys and private keys in git history or build logs remain a top incident
class. This CLI walks directories with `fast-glob`, runs dozens of provider-tuned
detectors, and emits SARIF or JSON for gating pipelines. Use only on code and artifacts
you are authorized to scan.

## Features

- `scan` — Recursive directory scan with severity-based `--fail-on` exit policy
- `grep` — Single file or stdin quick scan
- `list-detectors` — Show all registered rules and severities
- Outputs: terminal summary, `--json`, or `--sarif`
- Exit `2` when matches meet or exceed `--fail-on` severity (default: `high`)

## Install

```bash
git clone https://github.com/HackerX-official/hx-secrets-cli.git
cd hx-secrets-cli
npm install
npm run build
npm link   # optional: global hx-secrets
```

## Quick start

```bash
hx-secrets scan ./my-repo --sarif > secrets.sarif
hx-secrets scan . --json --fail-on critical
hx-secrets grep ./config.env
hx-secrets list-detectors
```

## Output

| Mode      | Description                                 |
| --------- | ------------------------------------------- |
| Default   | Per-match line: severity, rule, file:line   |
| `--json`  | `{ filesScanned, matches[] }` report object |
| `--sarif` | SARIF log for GitHub Code Scanning / CI     |
| Exit `2`  | Match at or above `--fail-on` threshold     |

## Develop

```bash
npm run format
npm run build
npm test
npm run format:check
```

## Architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md) for module layout and extension points.

## Ethics

Use only on systems and content you are **authorized** to test. See
[SECURITY.md](./SECURITY.md).

## License

Licensed under the [HackerX License](./LICENSE). Redistributions must retain copyright,
license text, and [NOTICE](./NOTICE) attribution per the license terms.
