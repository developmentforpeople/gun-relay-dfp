# gun-relay-dfp

[GunJS versions within NPM](https://www.npmjs.com/package/gun?activeTab=versions)

```bash
docker pull ghcr.io/developmentforpeople/gun-relay-dfp:latest

docker run -p 8765:8765 -d --name gun-relay-dfp ghcr.io/developmentforpeople/gun-relay-dfp:latest

http://0.0.0.0:8765
http://localhost:8765

```

```yml
# Portainer: Stack: gun-relay-dfp
version: '3.7'

services:
  gun:
    image: ghcr.io/developmentforpeople/gun-relay-dfp:latest
    # ports:
    #   - "8765:8765"
    deploy:
      mode: replicated
      replicas: 1
    networks:
      - default
      - public-proxy
networks:
  default:
    driver: overlay
  public-proxy:
    external: true

```
