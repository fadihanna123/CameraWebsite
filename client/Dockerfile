FROM node:20.14.0-alpine3.20
WORKDIR /frontend
COPY yarn.lock package.json .
RUN yarn install --frozen-lockfile --ignore-scripts
COPY . .
EXPOSE 3000
CMD yarn dev
