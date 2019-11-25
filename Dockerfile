FROM node:12

RUN \
    apt-get update \
    && apt-get install -y curl default-jdk

RUN mkdir /acceptance

RUN node --version

RUN npm --version

RUN yarn --version

WORKDIR /acceptance

ENTRYPOINT [ "yarn" ]