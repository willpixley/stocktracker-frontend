# --- Build stage ---
FROM node:20 AS build

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install ALL deps (including dev) to allow Svelte build
RUN npm ci

# Copy the rest of the source
COPY . .

# Build the app (adapter-node will generate build/)
RUN npm run build

# --- Runtime stage ---
FROM node:20 AS runtime

WORKDIR /app

# Copy only production dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy built app from build stage
COPY --from=build /app/build ./build

ENV VITE_BACKEND_API_URL=$VITE_BACKEND_API_URL

# Expose your app port
EXPOSE 3000

# Run the server (adapter-node output)
CMD ["node", "build"]
