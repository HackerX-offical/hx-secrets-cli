#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { Command } from 'commander';
import chalk from 'chalk';
import { scanDirectory } from './scanner.js';
import { scanContent } from './detectors.js';

const program = new Command();
program.name('hx-secrets').description('Secret & credential discovery engine').version('1.0.0');

program
  .command('scan')
  .description('Recursively scan a directory for high-signal secrets')
  .argument('<path>', 'directory root')
  .option('--json', 'SARIF-style JSON report')
  .option('--fail-on <severity>', 'exit 2 if match at or above', 'high')
  .action(async (path: string, opts: { json?: boolean; failOn: string }) => {
    const report = await scanDirectory(path);
    if (opts.json) {
      console.log(JSON.stringify(report, null, 2));
    } else {
      console.log(chalk.bold(`Scanned ${report.filesScanned} files under ${report.root}`));
      for (const m of report.matches) {
        const c = m.severity === 'critical' ? chalk.red : m.severity === 'high' ? chalk.yellow : chalk.dim;
        console.log(c(`${m.severity} ${m.ruleName} ${m.file}:${m.line}:${m.column}`));
        console.log(chalk.dim(`  ${m.match}`));
      }
    }
    const order = ['info', 'medium', 'high', 'critical'];
    const threshold = order.indexOf(opts.failOn);
    const bad = report.matches.some(
      (m) => order.indexOf(m.severity) >= threshold,
    );
    process.exit(bad ? 2 : 0);
  });

program
  .command('grep')
  .description('Scan a single file or stdin')
  .argument('<file>', 'file path or -')
  .option('--json', 'JSON output')
  .action((file: string, opts: { json?: boolean }) => {
    const content =
      file === '-' ? readFileSync(0, 'utf8') : readFileSync(file, 'utf8');
    const matches = scanContent(content, file);
    if (opts.json) console.log(JSON.stringify(matches, null, 2));
    else matches.forEach((m) => console.log(`${m.ruleName} L${m.line}: ${m.match}`));
    process.exit(matches.length ? 2 : 0);
  });

program.parse();
