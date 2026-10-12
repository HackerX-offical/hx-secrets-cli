import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'npm-token',
  name: 'npm Token',
  severity: 'high',
  pattern: new RegExp('npm_[A-Za-z0-9]{36}', 'gi'),
};
