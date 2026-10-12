import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'slack-bot',
  name: 'Slack Bot',
  severity: 'high',
  pattern: new RegExp('xoxb-[0-9A-Za-z-]{10,}', 'gi'),
};
