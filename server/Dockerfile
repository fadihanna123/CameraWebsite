FROM node:19-alpine
WORKDIR /backend
COPY ./ .
RUN npm install -g pnpm prisma ts-node-dev
RUN pnpm i
EXPOSE 5000
CMD pnpm dev
