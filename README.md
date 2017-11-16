# Demo Frontend Project

Serves as the frontend to the demo application, hosting some static content,
Angular 5 application and uses two backend micro-services at http://policies:8080 and
http://customers:3000.

## Building the image

In order to build the image run the following

```docker build -t demo-frontend .```

## Starting the Demo Frontend container

You can start the Demo Frontend conainer using the following command:

```docker run --name demo-frontend -d -p 80:80 --network sandbox demo-frontend```

The above command assumes that network sandbox exists in your docker environment.

If not it could be created with the following command:

```docker network create sandbox```

In order to use the docker image for development when the static content is automatically 
becomes available to nginx server in container, start the container using the following command:

```docker run --name demo-frontend -d -p 80:80 --network sandbox -v `pwd`/www:/usr/share/nginx/html demo-frontend```

