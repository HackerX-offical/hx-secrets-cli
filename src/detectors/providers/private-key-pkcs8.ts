import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'private-key-pkcs8',
  name: 'PKCS8 Private',
  severity: 'critical',
  pattern: new RegExp('-----BEGIN PRIVATE KEY-----', 'gi'),
};
