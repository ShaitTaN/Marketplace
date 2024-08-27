FROM node:20-alpine AS builder

RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY . .

RUN npm ci

RUN npm run build

FROM nginx:alpine as runner
WORKDIR /app

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/.nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]