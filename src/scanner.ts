import { readFileSync, statSync } from 'node:fs';
import fg from 'fast-glob';
import { Match, scanContent } from './detectors.js';

const SKIP_DIRS = ['node_modules', '.git', 'dist', 'coverage', '.next'];
const MAX_FILE = 2 * 1024 * 1024;

export interface ScanReport {
  root: string;
  filesScanned: number;
  matches: Array<Match & { file: string }>;
}

export async function scanDirectory(root: string): Promise<ScanReport> {
  const files = await fg(['**/*'], {
    cwd: root,
    absolute: true,
    dot: true,
    ignore: SKIP_DIRS.map((d) => `**/${d}/**`),
    onlyFiles: true,
  });

  const matches: ScanReport['matches'] = [];
  let scanned = 0;

  for (const file of files) {
    try {
      const st = statSync(file);
      if (st.size > MAX_FILE) continue;
      const content = readFileSync(file, 'utf8');
      scanned++;
      for (const m of scanContent(content, file)) {
        matches.push({ ...m, file });
      }
    } catch {
      // binary or unreadable
    }
  }

  return { root, filesScanned: scanned, matches };
}
