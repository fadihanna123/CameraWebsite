FROM node:21.6.1-alpine
WORKDIR /frontend
COPY ./ .
ENV REACT_APP_BACKEND_URL http://localhost:5000
ENV REACT_APP_LOGIN_API login
ENV REACT_APP_REGISTER_API register
RUN rm -rf node_modules yarn.lock
RUN npm i -g --ignore-scripts npm serve
RUN yarn --ignore-scripts
RUN yarn build
EXPOSE 3000
CMD npx serve build
