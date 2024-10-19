FROM node:18.20.2-alpine

WORKDIR /usr/app

# Install the required packages
# COPY ./ ./
COPY ./package.json ./

RUN npm install


# Copy the source code
COPY ./ ./

CMD [ "npm","dev" ]
