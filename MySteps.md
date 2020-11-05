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
* a **html** file > `node htmlFile.js`
* different **json** content > `node routes.js`

## Create http2 secure server
browser uses http/2 protocol > `node http2server.js`
Create private key and a self signed certificate :
`openssl req -x509 -newkey rsa:4096 -nodes -sha256 -subj '/CN=localhost' -keyout localhost-private.pem -out localhost-cert.pem`

## Allow invalid certificates for resources loaded from localhost.
Chrome Browser :
chrome://flag ; Allow invalid cert from localhost - enable

##### Git commands
<!-- use remote branch locally -->
`git checkout -b create-server origin/create-server`