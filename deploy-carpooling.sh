#!/bin/bash

# Authenticate with GHCR
echo $GHCR_PAT | docker login ghcr.io -u behrends --password-stdin

# Pull the latest image
docker pull ghcr.io/dhbwloerrach/carpooling:latest

# Stop and remove the existing container if it exists
docker stop carpooling || true
docker rm carpooling || true

# Run the new container
docker run -d \
  --name carpooling \
  -v /srv/docker/carpooling/prod.db:/app/prisma/prod.db \
  -e DATABASE_URL="file:./prod.db" \
  -p 3000:3000 \
  ghcr.io/dhbwloerrach/carpooling:latest

