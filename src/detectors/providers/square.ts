import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'square',
  name: 'Square',
  severity: 'high',
  pattern: new RegExp('sq0atp-[0-9A-Za-z_-]{22,}', 'gi'),
};
