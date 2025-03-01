FROM node:22-bookworm AS base
ENV CHROME_BIN=/usr/bin/chromium
ENV DEBIAN_FRONTEND=noninteractive
COPY . /project
WORKDIR /project

FROM base AS test
RUN apt update \
    && apt -y install chromium
RUN npm install
ENTRYPOINT ["npm", "run", "test-ci"]

FROM base AS build
RUN npm ci \
    && npm run build

FROM nginx:alpine AS prod
COPY --from=build /project/www /usr/share/nginx/html
