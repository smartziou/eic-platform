#!/bin/bash

echo "Building webpage"
npm run build_prod
echo "Building docker"
docker build -t eic-platform . &
docker stop eic-platform
docker rm eic-platform
wait
echo "Deploying"
docker run --name eic-platform -d -p 80:80 eic-platform
