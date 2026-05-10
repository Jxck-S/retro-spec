#!/usr/bin/env bash
# Pull the latest data branch files into your working tree for local dev.
# The .gitignore on main prevents these from being committed.
set -e

git show data:data/cars.json > data/cars.json
git show data:data/phones.json > data/phones.json
git show data:data/laptops.json > data/laptops.json

echo "Data synced from data branch."
echo "Images: run 'git worktree add ../retro-spec-data data' then copy public/images/ manually."
