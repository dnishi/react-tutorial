FROM debian:stable

RUN apt-get update \
    && apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs
RUN npm i -g npm
RUN useradd -d /home/node -s /bin/bash node


ENV TZ Asia/Tokyo

USER node

WORKDIR /home/node/app