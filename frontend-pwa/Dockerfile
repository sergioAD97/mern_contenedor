FROM node:14-alpine

RUN apk --no-cache -U upgrade

RUN mkdir -p /home/node/app/dist && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install --only=production

COPY --chown=node:node . .

ARG PORT=3001

ENV NODE_ENV production

EXPOSE ${PORT}

ENTRYPOINT [ "npm", "start" ]

# docker build -t citagendaf:prod .
