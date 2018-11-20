#!/bin/bash

IFS=$'\n'
DIST=${1:-.}

function replace() {
    sed  -i  "s|$1=\"[-/_:a-zA-Z0-9]*\"|$1=\"$2\"|g" ${DIST}/main.bundle.js
}

function sortVars() {
    printenv \
    | grep PLATFORM \
    | awk '{v=$0; gsub(/=.*/,"",v) ;printf "%d %s\n", length(v), $0}' \
    | sort -n \
    | cut -d' ' -f2-
}
function replaceVariables() {
    PLATFORM=$(sortVars)
    for i in ${PLATFORM}; do
        TEMP=${i#PLATFORM_}
        varName=${TEMP%=*}
        varValue=${TEMP#*=}
        replace ${varName} ${varValue}
    done
}

replaceVariables

nginx -g "daemon off;"