#!/bin/bash
sleep .5
browser-sync start --no-online --no-ui --port 3001 --proxy "localhost:3000" --files "src/views/" "static/"
