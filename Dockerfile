# syntax=docker/dockerfile:1.7
# Node.js 24 (Active LTS as of 2026)
FROM node:24-alpine

RUN apk add --no-cache libc6-compat git

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1 \
    CHOKIDAR_USEPOLLING=true \
    WATCHPACK_POLLING=true

EXPOSE 3000

CMD ["npm", "run", "dev"]
