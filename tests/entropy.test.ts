import { shannonEntropy } from '../src/engine/entropy.js';
import { scanContent } from '../src/engine/scan-content.js';

describe('shannonEntropy', () => {
  it('is zero for empty string', () => {
    expect(shannonEntropy('')).toBe(0);
  });

  it('is low for repeated characters', () => {
    expect(shannonEntropy('aaaaaaaaaa')).toBeLessThan(1);
  });

  it('is higher for varied strings', () => {
    expect(shannonEntropy('aZ9!xQ2')).toBeGreaterThan(shannonEntropy('aaaaaaa'));
  });
});

describe('scanContent entropy metadata', () => {
  it('attaches rounded entropy on matches', () => {
    const m = scanContent('ghp_123456789012345678901234567890123456');
    const hit = m.find((x) => x.ruleId === 'github-pat');
    expect(hit?.entropy).toBeDefined();
    expect(typeof hit?.entropy).toBe('number');
  });
});
