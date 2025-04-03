FROM node:22.14.0-alpine3.20
WORKDIR /backend
COPY yarn.lock package.json ./
RUN yarn setup
COPY . .
EXPOSE 5000
CMD ["yarn", "dev"]
