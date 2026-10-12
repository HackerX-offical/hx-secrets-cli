import { scanContent } from '../src/engine/scan-content.js';

describe('connection string detectors', () => {
  it('matches postgres URI', () => {
    const m = scanContent('DATABASE_URL=postgres://user:pass@localhost:5432/app');
    expect(m.some((x) => x.ruleId === 'postgres-uri')).toBe(true);
  });

  it('matches mongodb URI', () => {
    const m = scanContent('mongodb+srv://cluster.example.mongodb.net/mydb');
    expect(m.some((x) => x.ruleId === 'mongodb-uri')).toBe(true);
  });

  it('matches redis URI', () => {
    const m = scanContent('redis://:secret@127.0.0.1:6379/0');
    expect(m.some((x) => x.ruleId === 'redis-uri')).toBe(true);
  });
});
