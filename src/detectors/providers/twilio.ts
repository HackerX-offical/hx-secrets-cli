import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'twilio',
  name: 'Twilio',
  severity: 'high',
  pattern: new RegExp('SK[0-9a-fA-F]{32}', 'gi'),
};
