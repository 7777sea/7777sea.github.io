#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

cd docs/.vuepress/dist
touch README.md
echo '# welcome to Mercury Blog' > README.md
echo '最后发布时间为:' $(date) >> README.md

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:7777sea/7777sea.github.io.git master

cd -