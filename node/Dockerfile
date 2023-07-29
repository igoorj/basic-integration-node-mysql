FROM node:15

WORKDIR  /usr/src/app

COPY . .

EXPOSE 3000

RUN npm install pm2 -g

CMD [ "node", "index.js" ]