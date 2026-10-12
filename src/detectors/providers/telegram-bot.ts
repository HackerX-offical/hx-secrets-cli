import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'telegram-bot',
  name: 'Telegram Bot',
  severity: 'high',
  pattern: new RegExp('[0-9]{8,10}:[A-Za-z0-9_-]{35}', 'gi'),
};
