# Docusaurus Docker Image
# Based on the official Node.js 20 image (required for Docusaurus 3.x)
FROM node:20-alpine

# Image metadata
LABEL maintainer="JustCloud"
LABEL description="Docusaurus 3.9 container with auto-setup"
LABEL version="3.9"

# Build arguments - allow easy version updates
ARG DOCUSAURUS_VERSION=3.9.2
ARG NODE_ENV=production

# Environment variables
ENV DOCUSAURUS_VERSION=${DOCUSAURUS_VERSION}
ENV NODE_ENV=${NODE_ENV}
ENV PORT=80

# Install basic tools
RUN apk add --no-cache \
    git \
    sed \
    && rm -rf /var/cache/apk/*

# Create a working directory
WORKDIR /app

# Install Docusaurus globally (optional)
RUN npm install -g npm@latest

# Copy the initialization script
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Expose port 80 (main port)
EXPOSE 80

# Volume for persistent data
VOLUME ["/app"]

# Entry point
ENTRYPOINT ["docker-entrypoint.sh"]

# Default command - start the development server on port 80
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0", "--port", "80"]
