import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'discord-bot',
  name: 'Discord Bot',
  severity: 'high',
  pattern: new RegExp('[MN][A-Za-z0-9]{23,}\\.[A-Za-z0-9_-]{6}\\.[A-Za-z0-9_-]{27,}', 'gi'),
};
