#!/bin/bash
sleep 2.5s
browser-sync start \
    --no-online \
    --no-ui \
    --port 3001 \
    --proxy "localhost:3000" \
    --files "src/views/" "static/"
