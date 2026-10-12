import { scanContent } from '../src/engine/scan-content.js';

/** Synthetic fixtures — built at runtime to avoid push-protection false positives. */
function syntheticStripeKey(variant: 'live' | 'test'): string {
  const prefix = String.fromCharCode(115, 107, 95) + variant + '_';
  return prefix + '0'.repeat(24);
}

describe('Stripe detectors', () => {
  it('matches live secret key', () => {
    const key = syntheticStripeKey('live');
    const m = scanContent(`STRIPE_KEY=${key}`);
    expect(m.some((x) => x.ruleId === 'stripe-live')).toBe(true);
  });

  it('matches test secret key', () => {
    const key = syntheticStripeKey('test');
    const m = scanContent(key);
    expect(m.some((x) => x.ruleId === 'stripe-test')).toBe(true);
  });
});
