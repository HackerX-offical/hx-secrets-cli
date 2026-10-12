import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'mysql-uri',
  name: 'MySQL URI',
  severity: 'critical',
  pattern: new RegExp('mysql://\\S+', 'gi'),
};
