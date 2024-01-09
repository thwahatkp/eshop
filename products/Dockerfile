FROM node:16-slim

WORKDIR /app/products

# Install build dependencies
RUN apt-get update \
  && apt-get install -y build-essential \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --unsafe-perm

# Copy the rest of the application code
COPY . .

# Command to run the application
CMD ["npm", "run", "dev"]
