#!/bin/bash

git pull --dry-run | grep -q -v 'Already up-to-date.' && npm ci && npm run build

