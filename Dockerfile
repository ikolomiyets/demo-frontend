FROM nginx:alpine

COPY www/* /usr/share/nginx/html/
COPY conf/default.conf /etc/nginx/conf.d/

