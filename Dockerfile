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
RUN npm install npm@latest
RUN npm install react-scripts@latest
RUN npm run build   

# add app
COPY . ./

# exposing the specific port
EXPOSE 3000

# default command
CMD ["npm", "run", "start"]


# In case deploying using Nginx & maintain loadbalancing with multiple VM's

# FROM nginx:1.17.1-alpine
# COPY --from=build-step /app/build/usr/share/nginx/html