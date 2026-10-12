import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'aws-access-key',
  name: 'AWS Access Key',
  severity: 'critical',
  pattern: new RegExp('AKIA[0-9A-Z]{16}', 'gi'),
};
