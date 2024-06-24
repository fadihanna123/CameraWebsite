FROM node:20.14.0-alpine3.20
WORKDIR /backend
COPY yarn.lock package.json .
RUN npm i --ignore-scripts -g prisma ts-node-dev 
RUN yarn install --frozen-lockfile
COPY . .
EXPOSE 5000
CMD yarn dev
