FROM node:lts-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8765
CMD ["node", "server.js"]
