FROM node:lts
WORKDIR /frontend
COPY package.json .
RUN yarn
COPY . .
RUN npm i -g serve
RUN yarn build
EXPOSE 3000
CMD serve build
