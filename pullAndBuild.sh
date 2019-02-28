#!/bin/bash

/usr/bin/git submodule update --init --recursive --remote

/usr/bin/git pull | grep -q -v 'Already up-to-date.' && /usr/bin/npm ci && /usr/bin/npm run build
