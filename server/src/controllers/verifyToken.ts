import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Utils
import { privateToken } from '@core/utils';

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const Header: string | undefined = req.headers.authorization;
  const token: string | undefined = Header?.split(' ')?.[1];

  if (!token) {
    res.sendStatus(401);
  }

  try {
    jwt.verify(token!, privateToken as string);

    next();
  } catch (error: Error | unknown) {
    console.log(error);
    res.sendStatus(403);
  }
};
