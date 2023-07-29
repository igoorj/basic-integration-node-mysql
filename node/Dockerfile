FROM node:15

WORKDIR  /usr/src/app

COPY . .

EXPOSE 3000

RUN npm init && npm install express --save && npm install mysql --save
CMD [ "node", "index.js" ]