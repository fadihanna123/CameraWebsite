const { SSL_CRT_FILE, SSL_KEY_FILE } = process.env;

export const crtFile: string | undefined = SSL_CRT_FILE;

export const keyFile: string | undefined = SSL_KEY_FILE;
