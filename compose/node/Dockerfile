FROM node
WORKDIR /code
COPY ./package.json ./server.js /code/
COPY ./static /code/static
RUN npm install
CMD ["npm", "start"]
