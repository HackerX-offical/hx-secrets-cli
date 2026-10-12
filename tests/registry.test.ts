import { DETECTORS } from '../src/detectors/registry.js';

describe('detector registry', () => {
  it('loads many detectors with unique ids', () => {
    expect(DETECTORS.length).toBeGreaterThan(35);
    const ids = new Set(DETECTORS.map((d) => d.id));
    expect(ids.size).toBe(DETECTORS.length);
  });

  it('every detector has a global RegExp pattern', () => {
    for (const d of DETECTORS) {
      expect(d.pattern).toBeInstanceOf(RegExp);
      expect(d.pattern.global).toBe(true);
    }
  });
});
