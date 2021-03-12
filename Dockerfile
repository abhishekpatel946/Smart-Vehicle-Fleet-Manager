# bring base image
FROM node:14.16.0-alpine

# Author & Maintainer
LABEL maintainer="@abhishekpatel946" 

# create a working dir
WORKDIR /app

# add 'app/node_modules/.bin' to $PATH
ENV PATH=/app/node_modules/.bin:$PATH

# bring all files
COPY ./package.json ./
COPY ./package-lock.json ./

# run installer 
RUN npm install
RUN npm install react-scripts@4.0.3 -g

# add app
COPY . ./


# default command
CMD ["npm", "start"]