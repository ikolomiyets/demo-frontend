FROM nginx:alpine

COPY www/* /usr/share/nginx/html/
COPY conf/default.conf /etc/nginx/conf.d/

RUN chgrp -R 0 /var/cache \
  && chmod -R g+rwX /var/cache

RUN chgrp -R 0 /var/run \
  && chmod -R g+rwX /var/run

