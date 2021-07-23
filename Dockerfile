FROM node:15.14-alpine
WORKDIR /web-front
COPY . /web-front

RUN yarn

CMD ["yarn", "dev"]
