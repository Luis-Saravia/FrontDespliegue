FROM  nginx:alpine
COPY  . /usr/share/nginx/html
COPY  nginx.conf /etc/nginx/config.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]