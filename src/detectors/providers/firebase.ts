import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'firebase',
  name: 'Firebase',
  severity: 'high',
  pattern: new RegExp('firebase[_-]?api[_-]?key', 'gi'),
};
