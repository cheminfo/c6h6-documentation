#!/bin/bash

git pull --recurse-submodules | grep -q -v 'Already up-to-date.' && npm ci && npm run build
