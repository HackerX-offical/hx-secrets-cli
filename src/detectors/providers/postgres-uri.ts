import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'postgres-uri',
  name: 'PostgreSQL URI',
  severity: 'critical',
  pattern: new RegExp('postgres(?:ql)?://\\S+', 'gi'),
};
