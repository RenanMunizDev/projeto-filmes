# Etapa de build
FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build -- --configuration=production

# Etapa final com NGINX
FROM nginx:alpine
COPY --from=build /app/dist/filmes-front/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
