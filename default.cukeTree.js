module.exports = {
  "command": "run",
  "input": "./tmp/report.js",
  "output": "./tmp/report/",
  "features": "./features/",
  "bin": "node ./node_modules/myriad-cucumber/bin/myriad-cucumber --workers=4",
  "run": "./features/",
  "ext": []
};