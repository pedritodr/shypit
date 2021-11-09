# Install dependencies only when needed
FROM node:14-slim

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY  . .

RUN yarn build

EXPOSE 3000

CMD ["yarn","start"]