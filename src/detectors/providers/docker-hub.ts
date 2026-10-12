import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'docker-hub',
  name: 'Docker Hub',
  severity: 'medium',
  pattern: new RegExp('dckr_pat_[A-Za-z0-9_-]+', 'gi'),
};
