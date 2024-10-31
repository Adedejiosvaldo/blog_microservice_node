# FROM node:18.20.2-alpine

# WORKDIR /usr/app

# # Install the required packages
# # COPY ./ ./
# COPY ./package.json ./

# RUN npm install


# # Copy the source code
# COPY ./ ./

# CMD ["npm", "run", "dev"]
# Build stage

FROM node:18-alpine AS builder

WORKDIR /usr/app

COPY package.json .

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]
