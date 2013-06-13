module.exports = {
  "command": "run",
  "input": "./tmp/report.json",
  "output": "./tmp/report/",
  "features": "./features/",
  "run": "./features/",
  "bin": "node ./node_modules/myriad-cucumber/bin/myriad-cucumber --workers=4",
  "ext": []
};