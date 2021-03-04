FROM node:14

RUN mkdir /app
RUN npm install express
WORKDIR /app
ADD . /app/
EXPOSE 2000
EXPOSE 8000

CMD ["node", "server.js"]