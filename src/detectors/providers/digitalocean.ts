import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'digitalocean',
  name: 'DigitalOcean',
  severity: 'high',
  pattern: new RegExp('dop_v1_[a-f0-9]{64}', 'gi'),
};
