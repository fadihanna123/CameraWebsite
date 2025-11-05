const { TOKEN, APIKEY, ALLOWEDOMAINS } = process.env;

if (!TOKEN || !APIKEY) {
  throw new Error('Missing required environment variables');
}

export const apiKey = APIKEY;
export const privateToken = TOKEN;

export const allowedURLs = ALLOWEDOMAINS;
