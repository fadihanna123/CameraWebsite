FROM node:lts
WORKDIR /frontend
RUN rm -rf node_modules yarn.lock
COPY package.json .
RUN yarn
COPY . .
ENV REACT_APP_BACKEND_URL http://localhost:5000
ENV REACT_APP_LOGIN_API login
ENV REACT_APP_REGISTER_API register
RUN npm i -g serve
RUN yarn build
EXPOSE 3000
CMD serve build
