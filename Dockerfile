# Etapa de build
FROM node:24 AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Genera la carpeta build con la app lista para producción
RUN npm run build
