FROM node:alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUN npm install --legacy-peer-deps
RUN npm install -g @angular/cli
COPY ./package.json ./
COPY . .
RUN ng build --prod

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/frontend /usr/share/nginx/html
