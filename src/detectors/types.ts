export type Severity = 'critical' | 'high' | 'medium' | 'low';

export interface SecretDetector {
  id: string;
  name: string;
  severity: Severity;
  pattern: RegExp;
  entropyMin?: number;
}

export interface Match {
  ruleId: string;
  ruleName: string;
  severity: string;
  match: string;
  line: number;
  column: number;
  entropy?: number;
}
