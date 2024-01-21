FROM node:slim

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9292

CMD npm run dev