import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'shopify',
  name: 'Shopify',
  severity: 'high',
  pattern: new RegExp('shpat_[a-fA-F0-9]{32}', 'gi'),
};
