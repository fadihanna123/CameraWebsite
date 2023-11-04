import { port } from 'server';
import { logger } from 'tools';
import { storeLog } from 'utils/storeLog';

/**
 * Listen to the server.
 *
 * @function listenFn
 * @access Public
 * @returns { void }
 * @example listenFn();
 */
export const listenFn = (): void => {
  storeLog(`Server started on port ${port}`);
  logger.info(`Server started on port ${port}`);
};
