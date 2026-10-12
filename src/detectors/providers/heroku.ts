import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'heroku',
  name: 'Heroku API',
  severity: 'high',
  pattern: new RegExp(
    '[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}',
    'gi',
  ),
};
