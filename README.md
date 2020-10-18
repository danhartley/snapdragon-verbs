# The woods are lovely, dark and deep

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and enzyme
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).


## The woods are lovely, dark and deep

Add prerender-urls.js file
Install sass, and sass-loader
Add preact.config.js file, include sass
Add jest types: install @types/jest and/or/both jsconfig.json file (in this case in the folder where the tests are)
Add jest globally to take advantage of cli to e.g. run single tests.

Added hack in downshift to open menu when clearing input e.g. 
isOpen: _this.props.defaultIsOpen changed to isOpen: true at node_modules/downshift/preact/dist/downshift.esm.js

# wiki (* currently switched off*)
Published at gh-pages (merge required), and paths updated to ./
https://danhartley.github.io/snapdragon-verbs/wiki/index.html
<username>.github.io/<projectname>

# gh-pages
1) git add build && git commit -m "Initial build subtree commit" (RUN ONCE)
2) git subtree push --prefix build origin gh-pages (RUN FOR EVERY DEPLOY)

See: https://stackoverflow.com/questions/36782467/set-subdirectory-as-website-root-on-github-pages

Create a pull request for 'gh-pages' on GitHub by visiting:
https://github.com/danhartley/snapdragon-verbs/pull/new/gh-pages

https://danhartley.github.io/snapdragon-verbs/

Cleaning up and starting over: delete the gh-pages branch git branch -d gh-pages

# preact-config

relative paths: https://stackoverflow.com/questions/45742982/set-base-url-for-preact-cli

# sw
Turn off sw: https://github.com/preactjs/preact-cli/issues/1133
