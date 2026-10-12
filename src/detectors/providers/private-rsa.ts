import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'private-rsa',
  name: 'RSA Private Key',
  severity: 'critical',
  pattern: new RegExp('-----BEGIN (RSA )?PRIVATE KEY-----', 'gi'),
};
