import { scanContent } from '../src/detectors.js';

describe('scanContent', () => {
  it('finds github pat', () => {
    const m = scanContent('token = "ghp_123456789012345678901234567890123456"');
    expect(m.some((x) => x.ruleId === 'github-pat')).toBe(true);
  });

  it('finds private key header', () => {
    const m = scanContent('-----BEGIN RSA PRIVATE KEY-----\nMIIE');
    expect(m.some((x) => x.ruleId === 'private-rsa')).toBe(true);
  });
});
