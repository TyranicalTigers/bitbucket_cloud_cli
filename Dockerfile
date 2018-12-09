FROM node:8
WORKDIR /usr/src/app
COPY package.json ./
run NODE_ENV=production npm i
COPY . .
EXPOSE 80
CMD ["npm","start"]