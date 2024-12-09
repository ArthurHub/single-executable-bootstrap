// Therefore those skilled at the unorthodox
// are infinite as heaven and earth,
// inexhaustible as the great rivers.
// When they come to an end,
// they begin again,
// like the days and months;
// they die and are reborn,
// like the four seasons.
//
// - Sun Tsu, The Art of War.
//
// ArthurHub, 2024

import * as fs from 'fs';
import path from 'path';
import { logger } from './log.js';
import type { Config } from './config.js';

export function getNodeExecutable(config: Config): void {
  const nodeExec = path.join(config.stagingFolder, 'node.exe');
  if (!fs.existsSync(nodeExec)) {
    const defaultNodeExec = 'C:\\Program Files\\nodejs\\node.exe';
    logger.info(`Get node executable from "${defaultNodeExec}"`);
    fs.copyFileSync(defaultNodeExec, nodeExec);
  }
}