# Specify node version
FROM node:8

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy package configs and lockfile
COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/

# Install packages
RUN yarn install

# Bundle app source
COPY . /usr/src/app

EXPOSE 4000

# Run the entry point file
CMD ["yarn", "docker:dev"]