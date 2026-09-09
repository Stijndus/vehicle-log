FROM node:24-bookworm-slim AS node

FROM mcr.microsoft.com/devcontainers/php:1-8.3-bookworm

COPY --from=node /usr/local/bin/node /usr/local/bin/node
COPY --from=node /usr/local/include/node /usr/local/include/node
COPY --from=node /usr/local/lib/node_modules /usr/local/lib/node_modules

RUN ln -sf /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm \
    && ln -sf /usr/local/lib/node_modules/npm/bin/npx-cli.js /usr/local/bin/npx \
    && ln -sf /usr/local/lib/node_modules/corepack/dist/corepack.js /usr/local/bin/corepack \
    && apt-get update \
    && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y --no-install-recommends \
        default-mysql-client \
        libicu-dev \
        libzip-dev \
        sqlite3 \
        unzip \
    && docker-php-ext-install \
        bcmath \
        intl \
        pdo_mysql \
        zip \
    && corepack enable \
    && npm config set strict-ssl false \
    && npm install -g @angular/cli@22 @ionic/cli \
    && npm config delete strict-ssl \
    && npm cache clean --force \
    && rm -rf /var/lib/apt/lists/*
