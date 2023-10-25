FROM node:19.0.0-alpine3.16
ENV NODE_ENV=production

ADD ./build /src/app
ADD .env /src/app
# Create app directory
WORKDIR /src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm ci
# RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
# COPY build .

EXPOSE 8080

CMD [ "node", "index.js" ]