import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'anthropic',
  name: 'Anthropic',
  severity: 'high',
  pattern: new RegExp('sk-ant-[A-Za-z0-9_-]{20,}', 'gi'),
};
