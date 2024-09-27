#!/bin/bash

echo "Starting Docker containers..."
docker compose up -d

CONTAINER_ID=$(docker ps -qf "name=assignment-api")

if [ -z "$CONTAINER_ID" ]; then
  echo "Failed to find the running Docker container for the assignment-api service."
  exit 1
else
  echo "Running Prisma migrate dev..."
  docker exec -i $CONTAINER_ID npx prisma migrate dev --name "init" 

  echo "Running Prisma generate..."
  docker exec -i $CONTAINER_ID npx prisma generate 

  echo "Seeding the database..."
  docker exec -i $CONTAINER_ID npx prisma db seed 

  echo "Process completed successfully."
fi
