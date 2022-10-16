FROM node:16

WORKDIR /app-back

COPY package.json ./

RUN npm install --silent

COPY . .

ENTRYPOINT [ "npm" ]
CMD ["run", "dev"] 