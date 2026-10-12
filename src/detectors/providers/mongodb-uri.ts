import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'mongodb-uri',
  name: 'MongoDB URI',
  severity: 'critical',
  pattern: new RegExp('mongodb(?:\\+srv)?://\\S+', 'gi'),
};
