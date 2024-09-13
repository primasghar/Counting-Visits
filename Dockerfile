FROM denoland/deno:alpine-1.42.2

EXPOSE 7777

WORKDIR /app

COPY deps.js .

RUN deno cache deps.js

COPY . .

CMD [ "run", "--allow-read" "--allow-net", "--watch", "app.js" ]