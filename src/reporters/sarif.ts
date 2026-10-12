import type { ScanReport } from '../scanner/walker.js';

export function toSarif(report: ScanReport): string {
  return JSON.stringify(
    {
      version: '2.1.0',
      runs: [
        {
          tool: { driver: { name: 'hx-secrets-cli', version: '1.1.0' } },
          results: report.matches.map((m) => ({
            ruleId: m.ruleId,
            level: m.severity === 'critical' || m.severity === 'high' ? 'error' : 'warning',
            message: { text: `${m.ruleName}: ${m.match}` },
            locations: [
              {
                physicalLocation: {
                  artifactLocation: { uri: m.file },
                  region: { startLine: m.line, startColumn: m.column },
                },
              },
            ],
          })),
        },
      ],
    },
    null,
    2,
  );
}
