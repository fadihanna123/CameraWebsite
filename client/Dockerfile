FROM node:20.14.0-alpine3.20
WORKDIR /frontend
COPY package.json .
RUN npm i -g serve
RUN yarn
COPY . .
RUN yarn build:prod
EXPOSE 3000
CMD serve build
