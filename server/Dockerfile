FROM node:20.16.0-alpine3.20
WORKDIR /backend
COPY yarn.lock package.json ./
RUN npm i --silent --ignore-scripts -g prisma ts-node-dev 
RUN yarn --silent --ignore-scripts
COPY . .
EXPOSE 5000
CMD ["yarn", "dev"]
