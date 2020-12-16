#!/usr/bin/env bash
set -e

# Install dependencies defined in package.json
echo 'Installing dependencies...'
npm install

# Build package
echo 'Building package...'
npm run build

# Publish package
echo 'Publishing package...'
npm publish
