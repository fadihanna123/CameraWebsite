import { logger } from 'tools';

import { storeError } from './storeError';

/**
 * Handle server errors.
 *
 * @param { Error }  error
 * @returns { void }
 */
export const errorHandler = (error: Error): void => {
  if (error) {
    logger.error({ error: JSON.stringify(error.message) });
    storeError(error.message, '', 'Server');
  }
};
