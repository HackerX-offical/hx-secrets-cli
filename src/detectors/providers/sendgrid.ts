import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'sendgrid',
  name: 'SendGrid',
  severity: 'high',
  pattern: new RegExp('SG\\.[A-Za-z0-9_-]{20,}', 'gi'),
};
