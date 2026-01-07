import { connection } from 'db';

import { fileCleaner } from './fileClenaer';

/**
 * @author Fadi Hanna
 */

/**
 * Clean log and error data in the database and call fileCleaner.
 * @function logsRemover
 * @returns { void }
 * @example logsRemover();
 */
export const logsRemover = (): void => {
  connection.query('DELETE FROM logs');
  connection.query('DELETE FROM errors');
  fileCleaner();
};
