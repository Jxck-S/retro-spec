#!/usr/bin/env bash
# Pull committed data branch files into your local working tree.
# Run this when you want dev to reflect whatever's on the data branch.
#
# Usage:
#   npm run dev          → uses whatever's already in data/ and public/images/ locally
#   npm run dev:branch   → syncs from data branch first, then starts dev server
set -e

echo "Syncing from data branch..."
git show data:data/cars.json > data/cars.json
git show data:data/phones.json > data/phones.json
git show data:data/laptops.json > data/laptops.json
echo "JSON synced."

if git worktree list | grep -q retro-spec-data 2>/dev/null; then
  cp -r ../retro-spec-data/public/images/. public/images/
  echo "Images synced."
else
  echo "Note: to also sync images, run: git worktree add ../retro-spec-data data"
fi
