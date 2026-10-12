import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'aws-secret-key',
  name: 'AWS Secret Key',
  severity: 'critical',
  pattern: new RegExp(
    'aws[_-]?secret[_-]?access[_-]?key\\s*[=:]\\s*[\'"]?([A-Za-z0-9/+=]{40})',
    'gi',
  ),
};
