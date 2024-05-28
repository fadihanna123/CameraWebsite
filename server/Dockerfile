FROM node:lts
WORKDIR /backend
COPY package.json .
RUN yarn
COPY . .
ENV PORT 5000
ENV DATABASE_URL mysql://fadi:0000@db:3306/camera_website_db
RUN npm install -g prisma ts-node-dev
EXPOSE 5000
CMD yarn dev
