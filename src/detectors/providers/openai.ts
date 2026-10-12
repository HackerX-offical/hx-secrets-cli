import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'openai',
  name: 'OpenAI',
  severity: 'high',
  pattern: new RegExp('sk-[A-Za-z0-9]{20,}', 'gi'),
};
