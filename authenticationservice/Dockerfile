FROM node
WORKDIR /service
COPY package.json /service
RUN npm install
COPY . /app
CMD node server.js
EXPOSE 3001