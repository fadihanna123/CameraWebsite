FROM node:20.15.0-alpine3.20
RUN adduser -D -g '' fadi
WORKDIR /backend
COPY yarn.lock package.json .
RUN npm i --silent --ignore-scripts -g prisma ts-node-dev 
RUN yarn --silent --ignore-scripts
COPY . .
USER fadi
EXPOSE 5000
CMD yarn dev
