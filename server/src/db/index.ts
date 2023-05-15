import { PrismaClient } from '@prisma/client';
import { logger } from 'tools';
import { storeError, storeLog } from 'utils';

const prisma = new PrismaClient();

const connectDb = async () => {
  try {
    await prisma.$connect();
    logger.info('Database is connnected');
    storeLog('Database is connnected');
  } catch (error) {
    logger.error('Database has error');
    storeError('Database has error');
  }
};

export { connectDb, prisma };
