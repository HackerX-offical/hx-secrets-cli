import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'redis-uri',
  name: 'Redis URI',
  severity: 'high',
  pattern: new RegExp('redis://\\S+', 'gi'),
};
