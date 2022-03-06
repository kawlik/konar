#!/usr/bin/env sh


#   Config
#   *   *   *   *   *   *   *   *   *   *   *

#   abort on errors
set -e


#   Build app
#   *   *   *   *   *   *   *   *   *   *   *

#   delete prev build
rm -rf dist/

#   build
npm run build


#   Create commit
#   *   *   *   *   *   *   *   *   *   *   *

git add dist/ -f
git commit -m 'deploy'


#   Push commit
#   *   *   *   *   *   *   *   *   *   *   *

#   go to main
cd ..

#   push
git push -f client/dist origin gh-pages


#   After deploy
#   *   *   *   *   *   *   *   *   *   *   *

#   go to dev folder
cd -

#   log success
echo 'Deploy completed successfully!'