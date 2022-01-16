FROM node:16

# Add package file
COPY package*.json ./

# Install deps
RUN npm i

# Copy source
COPY . .

# Build dist
RUN npm run quick-build

# Expose port 3000
EXPOSE 3000