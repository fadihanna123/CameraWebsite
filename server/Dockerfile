FROM node:22.20-alpine
WORKDIR /backend
COPY yarn.lock package.json ./
RUN yarn setup
COPY ./ ./
EXPOSE 5000
CMD ["yarn", "dev"]
