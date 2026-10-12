import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'private-openssh',
  name: 'OpenSSH Private Key',
  severity: 'critical',
  pattern: new RegExp('-----BEGIN OPENSSH PRIVATE KEY-----', 'gi'),
};
