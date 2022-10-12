FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install -g pnpm && pnpm install --no-frozen-lockfile
RUN pnpm build
ENV NODE_ENV production
ENV NODE_PATH src
EXPOSE 3000
CMD [ "npx", "serve", "build" ]
