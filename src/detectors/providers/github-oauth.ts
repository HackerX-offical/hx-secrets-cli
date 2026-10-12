import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'github-oauth',
  name: 'GitHub OAuth',
  severity: 'critical',
  pattern: new RegExp('gho_[A-Za-z0-9]{36,}', 'gi'),
};
