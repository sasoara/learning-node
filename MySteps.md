<!-- Here I will write down all of my steps -->

## Set up a new or existing npm package.
run `npm init`

## New branch
Create a branch on the local machine and switch in this branch :
`git checkout -b create-server`
Push the branch on github :
`git push origin create-server`

## Install Jest Testing-Framework globally
run `npm install jest --global`
add to package.json :
"jest": {
    "collectCoverage": true
  },
"scripts": {
    "test": "jest --watchAll --collectCoverage"
  },
To use it :
`jest --detectOpenHandles`

## Unit-Testing
in js file :
`module.exports = { greeting, sayingGoodbye };`
in test.js file :
`const { greeting, sayingGoodbye } = require('./index');`

## Server can give different response
* **json** > `node json.js`
* a **csv** file > `node csv.js`
* **html** > `node html.js`

##### Git commands
<!-- use remote branch locally -->
`git checkout -b create-server origin/create-server`