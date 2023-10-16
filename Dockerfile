FROM node:14

WORKDIR /app
COPY package.json package-lock.json /app/

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]