import { port } from '@core/server';
import { logger } from '@core/tools';
import { storeLog } from '@core/utils';

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
