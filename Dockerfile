FROM node:16.11.1-alpine

WORKDIR /app

COPY package*.json ./

# USER node

RUN npm install --only=production

COPY . ./
# COPY --chown=node:node . ./

ENV APP_PORT 9000

EXPOSE ${APP_PORT}

CMD ["node", "src/app.js"]
