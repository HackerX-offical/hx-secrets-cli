import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'mailgun',
  name: 'Mailgun',
  severity: 'high',
  pattern: new RegExp('key-[0-9a-zA-Z]{32}', 'gi'),
};
