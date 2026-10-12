import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'slack-user',
  name: 'Slack User',
  severity: 'high',
  pattern: new RegExp('xoxp-[0-9A-Za-z-]{10,}', 'gi'),
};
