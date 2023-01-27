import { port } from 'server';
import { logger } from 'tools';
import { storeLog } from 'utils/storeLog';

/**
 * Listen to the server.
 *
 * @function listenFn
 * @returns { void }
 */

export const listenFn = (): void => {
  storeLog(`Server started on port ${port}`, '', '/');
  logger.info(`Server started on port ${port}`);
};
