module.exports = {
  package: '.',
  profiles: {
    busy_wait: {
      bin: 'node',
      args: ['./monkey_patches/cucumber/bin/cucumber.js', '-format', 'json', '-t', '~@wip', '--require', './features'],
      env: {
        WAIT: 'busy'
      }
    },
    sleep_wait: {
      bin: 'node',
      args: ['./monkey_patches/cucumber/bin/cucumber.js', '-format', 'json', '-t', '~@wip', '--require', './features'],
      env: {
        WAIT: 'sleep'
      }
    }
  }
};