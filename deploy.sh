#!/usr/bin/env sh

set -e 

npm run build

cd dist

git init 
git add -A
git commit -m 'deploy'
git push -f https://github.com/EJ-huang/Light-knowledge-lai.git master:gh-pages

cd -