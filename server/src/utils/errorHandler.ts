import { logger } from "tools";

export const errorHandler = (error: Error) => {
  if (error) logger.error({ error: JSON.stringify(error.message) });
};
