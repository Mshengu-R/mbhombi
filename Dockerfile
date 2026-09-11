# syntax=docker/dockerfile:1

FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies first for better layer caching
COPY package*.json ./
RUN npm install

# Copy app source and build frontend assets
COPY . .
RUN npm run build

# Serve the built frontend through Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
