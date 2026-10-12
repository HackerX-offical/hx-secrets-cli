export interface SecretRule {
  id: string;
  name: string;
  severity: 'critical' | 'high' | 'medium';
  pattern: RegExp;
  entropyMin?: number;
}

export const RULES: SecretRule[] = [
  { id: 'aws-access-key', name: 'AWS Access Key ID', severity: 'critical', pattern: /AKIA[0-9A-Z]{16}/g },
  { id: 'aws-secret', name: 'AWS Secret (contextual)', severity: 'critical', pattern: /aws[_-]?secret[_-]?access[_-]?key\s*[=:]\s*['"]?([A-Za-z0-9/+=]{40})['"]?/gi },
  { id: 'github-pat', name: 'GitHub PAT', severity: 'critical', pattern: /ghp_[A-Za-z0-9]{36,}/g },
  { id: 'github-oauth', name: 'GitHub OAuth', severity: 'critical', pattern: /gho_[A-Za-z0-9]{36,}/g },
  { id: 'slack-token', name: 'Slack Token', severity: 'high', pattern: /xox[baprs]-[0-9A-Za-z-]{10,}/g },
  { id: 'stripe-live', name: 'Stripe Live Key', severity: 'critical', pattern: /sk_live_[0-9a-zA-Z]{24,}/g },
  { id: 'openai', name: 'OpenAI API Key', severity: 'high', pattern: /sk-[A-Za-z0-9]{20,}T3BlbkFJ[A-Za-z0-9]{20,}/g },
  { id: 'private-rsa', name: 'RSA Private Key', severity: 'critical', pattern: /-----BEGIN (RSA |OPENSSH )?PRIVATE KEY-----/g },
  { id: 'jwt-in-source', name: 'JWT in source', severity: 'medium', pattern: /eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}/g },
  { id: 'generic-api-key', name: 'Generic API key assignment', severity: 'medium', pattern: /(?:api[_-]?key|apikey|secret[_-]?key)\s*[=:]\s*['"]([A-Za-z0-9_\-./+=]{16,})['"]/gi },
  { id: 'postgres-url', name: 'PostgreSQL URL', severity: 'critical', pattern: /postgres(?:ql)?:\/\/[^\s'"]+/gi },
  { id: 'mongodb-uri', name: 'MongoDB URI', severity: 'critical', pattern: /mongodb(?:\+srv)?:\/\/[^\s'"]+/gi },
];

export function shannonEntropy(s: string): number {
  const freq = new Map<string, number>();
  for (const c of s) freq.set(c, (freq.get(c) ?? 0) + 1);
  let e = 0;
  for (const n of freq.values()) {
    const p = n / s.length;
    e -= p * Math.log2(p);
  }
  return e;
}

export interface Match {
  ruleId: string;
  ruleName: string;
  severity: string;
  match: string;
  line: number;
  column: number;
  entropy?: number;
}

export function scanContent(content: string, filePath = '<stdin>'): Match[] {
  const lines = content.split(/\r?\n/);
  const out: Match[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (const rule of RULES) {
      rule.pattern.lastIndex = 0;
      let m: RegExpExecArray | null;
      while ((m = rule.pattern.exec(line)) !== null) {
        const raw = m[1] ?? m[0];
        const ent = shannonEntropy(raw);
        if (rule.entropyMin && ent < rule.entropyMin) continue;
        out.push({
          ruleId: rule.id,
          ruleName: rule.name,
          severity: rule.severity,
          match: raw.slice(0, 120),
          line: i + 1,
          column: m.index + 1,
          entropy: Number(ent.toFixed(2)),
        });
      }
    }
  }
  return out;
}
