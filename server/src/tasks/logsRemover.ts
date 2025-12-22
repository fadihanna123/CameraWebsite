import { connection } from 'db';

import { fileCleaner } from './fileClenaer';

/**
 * @author Fadi Hanna
 */

/**
 * Clean log and error data in the database and call fileCleaner.
 * @function logsRemover
 * @async
 * @returns { Promise<void> }
 * @example logsRemover();
 */
export const logsRemover = async (): Promise<void> => {
  await connection.query('DELETE FROM logs');
  await connection.query('DELETE FROM errors');
  fileCleaner();
};
