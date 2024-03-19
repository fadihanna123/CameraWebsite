FROM node:lts
WORKDIR /backend
COPY package.json .
RUN yarn
COPY . .
RUN npm install -g npm prisma ts-node-dev
EXPOSE 5000
CMD yarn dev
