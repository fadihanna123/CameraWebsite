FROM node:21.6.1-alpine
WORKDIR /backend
COPY ./ .
RUN npm install -g npm prisma ts-node-dev
RUN yarn
EXPOSE 5000
CMD yarn dev
