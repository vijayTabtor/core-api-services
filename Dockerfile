# Pull base image.
FROM node:8.6.0

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /var/www/api && cp -a /tmp/node_modules /var/www/api

# Create api folder
#RUN mkdir -p /var/www/api

# Bundle app source for deployment
COPY . /var/www/api

WORKDIR /var/www/api

CMD ["node", "index.js"]