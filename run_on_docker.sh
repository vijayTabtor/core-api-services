#!/bin/bash

docker rm $(docker ps -a -q)
docker rmi $(docker images -q)
docker build -t core-api-services .
docker run -p 300:4000 core-api-services
docker logs -f $(docker ps -q --filter "ancestor=core-api-services")
