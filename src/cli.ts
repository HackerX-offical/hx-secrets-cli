#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { Command } from 'commander';
import chalk from 'chalk';
import { scanDirectory } from './scanner/walker.js';
import { scanContent } from './engine/scan-content.js';
import { toSarif } from './reporters/sarif.js';
import { DETECTORS } from './detectors/registry.js';

const program = new Command();
program
  .name('hx-secrets')
  .description(`Secret discovery (${DETECTORS.length} detectors)`)
  .version('1.1.0');

program
  .command('list-detectors')
  .description('List all registered secret detectors')
  .action(() => {
    DETECTORS.forEach((d) => console.log(`${d.severity.padEnd(10)} ${d.id} — ${d.name}`));
  });

program
  .command('scan')
  .argument('<path>', 'directory')
  .option('--sarif', 'SARIF output')
  .option('--json', 'JSON output')
  .option('--fail-on <severity>', 'exit 2 threshold', 'high')
  .action(async (path: string, opts: { sarif?: boolean; json?: boolean; failOn: string }) => {
    const report = await scanDirectory(path);
    if (opts.sarif) console.log(toSarif(report));
    else if (opts.json) console.log(JSON.stringify(report, null, 2));
    else {
      console.log(
        chalk.bold(`Scanned ${report.filesScanned} files — ${report.matches.length} hits`),
      );
      report.matches.forEach((m) => {
        const c =
          m.severity === 'critical' ? chalk.red : m.severity === 'high' ? chalk.yellow : chalk.dim;
        console.log(c(`${m.severity} ${m.ruleName} ${m.file}:${m.line}`));
      });
    }
    const order = ['info', 'low', 'medium', 'high', 'critical'];
    const bad = report.matches.some((m) => order.indexOf(m.severity) >= order.indexOf(opts.failOn));
    process.exit(bad ? 2 : 0);
  });

program
  .command('grep')
  .argument('<file>', 'file or -')
  .action((file: string) => {
    const content = file === '-' ? readFileSync(0, 'utf8') : readFileSync(file, 'utf8');
    const matches = scanContent(content, file);
    matches.forEach((m) => console.log(`${m.ruleName} L${m.line}: ${m.match}`));
    process.exit(matches.length ? 2 : 0);
  });

program.parse();
