#!/bin/sh
set -e  # if a command fails it stops the execution
set -u  # script fails if trying to access to an undefined variable

export API_TOKEN_GITHUB=$1
export COMMIT_MESSAGE=$2


echo "Starts"
SOURCE_DIRECTORY="dist"

CLONE_DIR=$(mktemp -d)

echo "Cloning destination git repository"
# Setup git
git config --global user.email "dev@msahil432.com"
git config --global user.name "msahil432"
git clone --single-branch --branch "master" "https://$API_TOKEN_GITHUB@github.com/msahil432/com.msahil432.profile.git" "$CLONE_DIR"
ls -la "$CLONE_DIR"

echo "Copying contents to git repo"
rm -rf "$CLONE_DIR"/www
cp -ra "$SOURCE_DIRECTORY"/. "$CLONE_DIR"/www
cd "$CLONE_DIR"

echo "Updating things for Cordova"
./prepare-for-cordova.sh

cat ./www/index.html

echo "Files that will be pushed"
ls -la

echo "Adding git commit"

git add .
git status

# git diff-index : to avoid doing the git commit failing if there are no changes to be commit
git diff-index --quiet HEAD || git commit --message "$COMMIT_MESSAGE"

echo "Pushing git commit"
# --set-upstream: sets de branch when pushing to a branch that does not exist
git push origin --set-upstream master
