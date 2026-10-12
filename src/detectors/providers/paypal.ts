import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'paypal',
  name: 'PayPal',
  severity: 'high',
  pattern: new RegExp('access_token\\$production\\$[a-z0-9]{16}', 'gi'),
};
