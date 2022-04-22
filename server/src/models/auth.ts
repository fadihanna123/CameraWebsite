import { Request as ExpressRequest } from 'express';

import { IUsers } from './users.model';

export interface Request extends ExpressRequest {
    user?: IUsers;
}
