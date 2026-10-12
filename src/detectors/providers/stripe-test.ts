import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'stripe-test',
  name: 'Stripe Test',
  severity: 'medium',
  pattern: new RegExp('sk_test_[0-9a-zA-Z]{24,}', 'gi'),
};
