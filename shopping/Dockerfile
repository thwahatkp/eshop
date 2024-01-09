FROM node:16

WORKDIR /app/products

COPY package.json .

RUN npm install -f

COPY . .

# EXPOSE 3001

# CMD ["npm", "start"]
CMD ["npm", "run", "dev"]