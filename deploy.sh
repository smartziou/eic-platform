#!/bin/bash

echo "Building webpage"
npm run build_prod
echo "Building docker"
docker build -t omtd-platform . &
docker stop omtd-platform
docker rm omtd-platform
wait
echo "Deploying"
docker run --name omtd-platform -d -p 80:80 omtd-platform



