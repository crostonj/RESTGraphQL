#node container
FROM node:4-onbuild

MAINTAINER  jeff.croston@nelnet.net

# make sure apt is up to date
RUN apt-get update

# Create app directory
#RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


#RUN git clone https://github.com/crostonj/RESTGraphQL.git .
# Bundle app source

#RUN npm install

# Install app dependencies
RUN ./node_modules/.bin/babel src -d lib

EXPOSE 8080
CMD [ "npm", "start" ]
