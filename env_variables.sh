#!/bin/bash

envsubst '${MATOMO_HOST} ${MATOMO_SITE_ID}' < /usr/share/nginx/html/index.html.tmpl > /usr/share/nginx/html/index.html &&
envsubst '${PLATFORM_API_ENDPOINT}' < /etc/nginx/nginx.conf.tmpl > /etc/nginx/nginx.conf &&

nginx -g "daemon off;"