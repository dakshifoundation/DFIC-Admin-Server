FROM ubuntu:latest

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update && apt install -y libreoffice

WORKDIR /home/admin

COPY app.js /home/admin/server.js
COPY package.json /home/admin/package.json
COPY . /home/admin


RUN apt install -y curl && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - 
RUN apt install -y nodejs

RUN npm install


EXPOSE 3000


CMD ["node", "app.js"]
