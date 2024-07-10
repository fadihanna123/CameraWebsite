FROM node:20.15.1-alpine3.20
WORKDIR /frontend
COPY yarn.lock package.json ./
RUN yarn --silent --ignore-scripts
COPY . .
EXPOSE 3000
CMD yarn dev
