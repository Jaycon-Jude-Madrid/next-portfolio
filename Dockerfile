# filepath: /Users/jobvious-pc03/Desktop/test-dev/next-portfolio/Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]