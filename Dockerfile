# Fetching the latest node image on alpine linux
FROM node:14.21.3 AS development

# Declaring env
ENV NODE_ENV development

# Setting up the work directorydocker 
WORKDIR /react-app

# Installing dependencies
COPY ./package.json /react-app
RUN npm install
EXPOSE 3000
# Copying all the files in our project
COPY . .

# Starting our application
CMD npm start