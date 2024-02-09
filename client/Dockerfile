FROM node:21.6.1-alpine
WORKDIR /frontend
COPY ./ .
RUN npm i -g pnpm serve
RUN pnpm i
RUN pnpm build
EXPOSE 3000
CMD pnpm serve build
