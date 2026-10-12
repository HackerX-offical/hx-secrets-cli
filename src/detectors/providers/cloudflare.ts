import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'cloudflare',
  name: 'Cloudflare',
  severity: 'high',
  pattern: new RegExp('CF_API_KEY|cf_api_key', 'gi'),
};
