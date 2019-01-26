#!/bin/bash

git pull | grep -q -v 'Already up-to-date.' && npm ci && npm run build

