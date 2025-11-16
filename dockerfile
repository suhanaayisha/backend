# -----------------------
# 1. Builder Stage
# -----------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first (for caching)
COPY package*.json ./
RUN npm install --production=false

# Copy the rest of your code
COPY . .

# Build TypeScript → JavaScript
RUN npm run build

# -----------------------
# 2. Production Stage
# -----------------------
FROM node:20-alpine AS prod

WORKDIR /app

# Copy only required files for runtime
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy compiled JS from builder
COPY --from=builder /app/dist ./dist

# Expose your API port
EXPOSE 4000

# Start your server
CMD ["node", "dist/index.js"]