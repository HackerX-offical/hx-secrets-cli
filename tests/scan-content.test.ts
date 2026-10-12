import { scanContent } from '../src/engine/scan-content.js';

describe('scanContent', () => {
  it('finds github pat with line and column', () => {
    const line = 'token = "ghp_123456789012345678901234567890123456"';
    const m = scanContent(line);
    const hit = m.find((x) => x.ruleId === 'github-pat');
    expect(hit).toBeDefined();
    expect(hit!.line).toBe(1);
    expect(hit!.column).toBeGreaterThan(0);
  });

  it('finds private key header', () => {
    const m = scanContent('-----BEGIN RSA PRIVATE KEY-----\nMIIE');
    expect(m.some((x) => x.ruleId === 'private-rsa')).toBe(true);
  });

  it('returns empty for clean content', () => {
    expect(scanContent('hello world\nno secrets here')).toEqual([]);
  });

  it('scans multiple lines independently', () => {
    const m = scanContent('line1\nAKIAIOSFODNN7EXAMPLE\nline3');
    expect(m.some((x) => x.ruleId === 'aws-access-key' && x.line === 2)).toBe(true);
  });
});
