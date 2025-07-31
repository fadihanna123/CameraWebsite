FROM node:22.17.1-alpine
WORKDIR /backend
COPY yarn.lock package.json ./
RUN yarn setup
COPY ./ ./
EXPOSE 5000
CMD ["yarn", "dev"]
