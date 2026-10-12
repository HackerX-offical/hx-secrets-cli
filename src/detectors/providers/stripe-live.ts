import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'stripe-live',
  name: 'Stripe Live',
  severity: 'critical',
  pattern: new RegExp('sk_live_[0-9a-zA-Z]{24,}', 'gi'),
};
