FROM node:20.18.0-alpine3.20
WORKDIR /backend
COPY yarn.lock package.json ./
RUN npm i --silent --ignore-scripts -g prisma ts-node-dev 
RUN yarn setup
COPY . .
EXPOSE 5000
CMD ["yarn", "dev"]
