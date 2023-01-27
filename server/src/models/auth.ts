import { Request as ExpressRequest } from 'express';

import { IUsers } from './users.model';

/**
 * @param { IUsers } user
 */
export interface Request extends ExpressRequest {
  user?: IUsers;
}
