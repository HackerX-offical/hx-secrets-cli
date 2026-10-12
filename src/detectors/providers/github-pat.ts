import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'github-pat',
  name: 'GitHub PAT',
  severity: 'critical',
  pattern: new RegExp('ghp_[A-Za-z0-9]{36,}', 'gi'),
};
