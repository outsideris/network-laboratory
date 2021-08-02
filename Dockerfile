FROM node:16

LABEL maintainer="outsideris@gmail.com"

WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY server.js .

RUN npm install

EXPOSE 3000

CMD node server
