import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'mapbox',
  name: 'Mapbox',
  severity: 'medium',
  pattern: new RegExp('pk\\.[A-Za-z0-9]{60,}', 'gi'),
};
