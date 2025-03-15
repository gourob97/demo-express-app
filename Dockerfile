FROM node:23.4.0

WORKDIR /app

COPY package.json package-lock.json /.

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]

