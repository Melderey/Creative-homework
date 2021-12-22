FROM node
COPY . /example
WORKDIR /example
CMD node /example/index.js