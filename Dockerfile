FROM node:16-alpine 

ENV NEXT_PORT=3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
COPY yarn.lock /usr/src/app/

RUN yarn

# Copying source files

COPY . /usr/src/app

# Building app
RUN yarn run build

EXPOSE 3000

# Running the app
CMD "npm" "run" "start"