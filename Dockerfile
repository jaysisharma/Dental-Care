FROM nginx:alpine-perl

WORKDIR /usr/share/nginx/html

COPY index.html script.js ./
COPY assets images assets/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
