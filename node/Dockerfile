FROM node:15

WORKDIR /usr/src/app

# RUN apt-get update && apt-get install -y wget
COPY . . 

RUN npm install
CMD [ "node", "index.js" ]
EXPOSE 3000