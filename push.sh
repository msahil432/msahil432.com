#!/bin/sh

#Made by msahil432
RED='\033[0;31m'
NC='\033[0m'

git config commit.gpgsign true
git config user.name "Sahil Malik"
git config user.email "dev@msahil432.com"

echo "-----------       ${RED}git add . ${NC}                          --------------"
git add .

echo "-----------      ${RED} git commit - $1 ${NC} --------------"
git commit -S -m "$1"

echo "-----------      ${RED} git push heroku master ${NC}             --------------"
git push heroku master
