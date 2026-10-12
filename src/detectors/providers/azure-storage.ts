import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'azure-storage',
  name: 'Azure Storage',
  severity: 'critical',
  pattern: new RegExp('DefaultEndpointsProtocol=https;AccountName=', 'gi'),
};
