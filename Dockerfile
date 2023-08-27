FROM node:16.14.2-alpine3.15 as build

RUN mkdir /app \
 && npm install -g @angular/cli@12.2.4

ADD https://iktech-public-dl.s3.eu-west-1.amazonaws.com/http-server-entrypoint/linux-x64/http-server-entrypoint  /http-server-entrypoint

WORKDIR /app

ADD src /app/src/
ADD e2e /app/e2e/
ADD *.js *.json /app/

RUN npm install
RUN ng build --output-path www --configuration=production --prod --aot \
RUN chmod 755 /http-server-entrypoint

FROM nginx:1.21.6-alpine

RUN apk update \
    && apk upgrade

COPY --from=build /app/www/* /usr/share/nginx/html/
COPY conf/default.conf /etc/nginx/conf.d/

RUN chgrp -R 0 /var/cache \
  && chmod -R g+rwX /var/cache

RUN chgrp -R 0 /var/run \
  && chmod -R g+rwX /var/run

