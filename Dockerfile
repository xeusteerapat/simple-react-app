FROM node:alpine as react_build

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

COPY --from=react_build /app/build /usr/share/nginx/html
COPY --from=react_build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]