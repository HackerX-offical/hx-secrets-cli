import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { scanDirectory } from '../src/scanner/walker.js';

describe('scanDirectory', () => {
  it('scans text files and skips huge files', async () => {
    const root = mkdtempSync(join(tmpdir(), 'hx-secrets-'));
    writeFileSync(join(root, 'keys.txt'), 'ghp_123456789012345678901234567890123456\n');

    const report = await scanDirectory(root);
    expect(report.filesScanned).toBe(1);
    expect(
      report.matches.some((m) => m.ruleId === 'github-pat' && m.file.endsWith('keys.txt')),
    ).toBe(true);
  });
});
