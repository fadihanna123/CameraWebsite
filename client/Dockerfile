FROM node:22.19.0-alpine
WORKDIR /frontend
RUN npm i -g --ignore-scripts --silent --emoji serve
COPY yarn.lock package.json ./
RUN yarn setup
COPY ./ ./
EXPOSE 3000
CMD ["yarn", "dev"]
