var CukeTree = require("cuke-tree");

module.exports = {
  "command": "ide",
  "input": "./tmp/report.json",
  "output": "./tmp/report/",
  "features": "./features/",
  "bin": "node ./node_modules/myriad-cucumber/bin/myriad-cucumber --workers=4",
  "launch": true,
  "ext": [
    CukeTree.extensions.test_suite
  ]
};