import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'gitlab-pat',
  name: 'GitLab PAT',
  severity: 'critical',
  pattern: new RegExp('glpat-[A-Za-z0-9_-]{20,}', 'gi'),
};
