import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'jwt-embedded',
  name: 'JWT in source',
  severity: 'medium',
  pattern: new RegExp('eyJ[A-Za-z0-9_-]{10,}\\.[A-Za-z0-9_-]{10,}\\.[A-Za-z0-9_-]{10,}', 'gi'),
};
