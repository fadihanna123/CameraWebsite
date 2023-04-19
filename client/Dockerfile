FROM node:19-alpine
WORKDIR /frontend
COPY ./ .
RUN npm i -g pnpm serve
RUN pnpm i
RUN pnpm build
EXPOSE 3000
CMD pnpm serve build
