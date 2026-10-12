import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'gcp-api',
  name: 'GCP API Key',
  severity: 'high',
  pattern: new RegExp('AIza[0-9A-Za-z_-]{35}', 'gi'),
};
