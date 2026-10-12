import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'algolia',
  name: 'Algolia',
  severity: 'medium',
  pattern: new RegExp('algolia[_-]?api[_-]?key', 'gi'),
};
