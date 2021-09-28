# build env
FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install --save styled-components --silent
RUN npm install --save @mui/material @emotion/react @emotion/styled --silent
RUN npm install --save @mui/icons-material --silent
COPY . ./
RUN npm run build

# Production Environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]