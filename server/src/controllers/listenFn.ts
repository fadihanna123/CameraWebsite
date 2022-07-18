import { port } from 'server';
import { logger } from 'tools';
import { storeLog } from 'utils/storeLog';

export const listenFn = () => {
  storeLog(`Server started on port ${port}`, '', '/');
  logger.info(`Server started on port ${port}`);
};
