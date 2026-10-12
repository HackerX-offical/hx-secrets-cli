import { toSarif } from '../src/reporters/sarif.js';
import type { ScanReport } from '../src/scanner/walker.js';

describe('toSarif', () => {
  it('emits SARIF 2.1 with locations', () => {
    const report: ScanReport = {
      root: '/proj',
      filesScanned: 1,
      matches: [
        {
          ruleId: 'github-pat',
          ruleName: 'GitHub PAT',
          severity: 'critical',
          match: 'ghp_redacted',
          line: 2,
          column: 5,
          file: '/proj/.env',
          entropy: 4.2,
        },
      ],
    };

    const sarif = JSON.parse(toSarif(report)) as {
      version: string;
      runs: Array<{
        results: Array<{
          level: string;
          locations: Array<{ physicalLocation: { artifactLocation: { uri: string } } }>;
        }>;
      }>;
    };

    expect(sarif.version).toBe('2.1.0');
    expect(sarif.runs[0].results[0].level).toBe('error');
    expect(sarif.runs[0].results[0].locations[0].physicalLocation.artifactLocation.uri).toBe(
      '/proj/.env',
    );
  });
});
