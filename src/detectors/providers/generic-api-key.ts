import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'generic-api-key',
  name: 'Generic API Key',
  severity: 'medium',
  pattern: new RegExp('(?:api[_-]?key|apikey)\\s*[=:]\\s*["\']?([A-Za-z0-9_\\-./+=]{16,})', 'gi'),
};
