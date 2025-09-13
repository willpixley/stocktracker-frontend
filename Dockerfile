# Use latest Node 20
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy app source
COPY . .

# Build the app
RUN npm run build

# Expose port for Fargate
EXPOSE 3000

# Start app
CMD ["npm", "start"]
