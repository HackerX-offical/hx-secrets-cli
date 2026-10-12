import { DETECTORS } from '../detectors/registry.js';
import type { Match } from '../detectors/types.js';
import { shannonEntropy } from './entropy.js';

export function scanContent(content: string, filePath = '<stdin>'): Match[] {
  const lines = content.split(/\r?\n/);
  const out: Match[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (const rule of DETECTORS) {
      rule.pattern.lastIndex = 0;
      let m: RegExpExecArray | null;
      while ((m = rule.pattern.exec(line)) !== null) {
        const raw = (m[1] ?? m[0]).slice(0, 200);
        const ent = shannonEntropy(raw);
        if (rule.entropyMin && ent < rule.entropyMin) continue;
        out.push({
          ruleId: rule.id,
          ruleName: rule.name,
          severity: rule.severity,
          match: raw,
          line: i + 1,
          column: m.index + 1,
          entropy: Number(ent.toFixed(2)),
        });
      }
    }
  }
  return out;
}
