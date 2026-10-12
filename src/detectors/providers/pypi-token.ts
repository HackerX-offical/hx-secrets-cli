import type { SecretDetector } from '../types.js';

export const detector: SecretDetector = {
  id: 'pypi-token',
  name: 'PyPI Token',
  severity: 'high',
  pattern: new RegExp('pypi-[A-Za-z0-9_-]{50,}', 'gi'),
};
