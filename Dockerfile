FROM node:8.4.0

RUN mkdir /app

WORKDIR /app

COPY package.json /app
RUN npm install

COPY . /app/

EXPOSE 3030

CMD ["npm", "start"]
