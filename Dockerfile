FROM node:16.20.2-alpine3.18 as build

RUN mkdir /app
RUN npm install -g @angular/cli@16.2.0

WORKDIR /app

ADD src /app/src/
ADD e2e /app/e2e/
ADD *.js *.json /app/

RUN npm install
RUN ng build --output-path www --configuration=production --aot

FROM nginx:1.25.2-alpine

RUN apk update
RUN apk upgrade

COPY --from=build /app/www/* /usr/share/nginx/html/
COPY conf/default.conf /etc/nginx/conf.d/

RUN chgrp -R 0 /var/cache
RUN chmod -R g+rwX /var/cache
RUN mkdir -p /usr/share/nginx/html/assets
RUN mv /usr/share/nginx/html/_etc /usr/share/nginx/html/assets
#RUN touch /usr/share/nginx/html/assets/_etc/config.json
#ADD https://iktech-public-dl.s3.eu-west-1.amazonaws.com/http-server-entrypoint/linux-x64/http-server-entrypoint  /http-server-entrypoint
#RUN chmod 755 /http-server-entrypoint
RUN chmod 777 /usr/share/nginx/html/assets/_etc/config.json
RUN #chmod 755 /config.sh
RUN chgrp -R 0 /var/run
RUN chmod -R g+rwX /var/run

