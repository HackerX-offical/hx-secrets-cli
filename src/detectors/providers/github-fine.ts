import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'github-fine',
  name: 'GitHub Fine PAT',
  severity: 'critical',
  pattern: new RegExp('github_pat_[A-Za-z0-9_]{60,}', 'gi'),
};
