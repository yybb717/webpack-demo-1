yarn build &&
git checkout gh-pages &&
rm -rf *.htm *.js *.css *.png &&
mv dist/* ./ && 
rm -rf dist &&
git add . &&
git commit -m "update" &&
git  &&
git checkout master
