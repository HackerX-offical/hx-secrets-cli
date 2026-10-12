import { scanContent } from '../src/engine/scan-content.js';

describe('AWS detectors', () => {
  it('matches access key id', () => {
    const m = scanContent('key=AKIAIOSFODNN7EXAMPLE');
    expect(m.some((x) => x.ruleId === 'aws-access-key')).toBe(true);
  });

  it('matches secret access key assignment', () => {
    const secret = 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY';
    const m = scanContent(`aws_secret_access_key = "${secret}"`);
    expect(m.some((x) => x.ruleId === 'aws-secret-key' && x.match.includes(secret.slice(0, 8)))).toBe(
      true,
    );
  });
});
