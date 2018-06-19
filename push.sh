#!/bin/sh

#Made by msahil432

echo "git add ."
git add .

echo "git commit - $1"
git commit -m "$1"

echo "git push heroku master"
git push heroku master