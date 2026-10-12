# hx-secrets-cli

**Credential discovery engine** tuned for offensive security deliverables — not noisy generic grep. Rules target cloud keys, VCS tokens, payment providers, DB URIs, embedded JWTs, and PEM private material with entropy metadata.

## Usage

```bash
hx-secrets scan ./repo --fail-on high
hx-secrets grep ./config.env --json
```

Use on **authorized** codebases (client repos, leak dumps, CI artifacts). MIT — HackerX Official.
