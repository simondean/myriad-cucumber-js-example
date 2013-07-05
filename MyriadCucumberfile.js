module.exports = {
  package: '.',
  profiles: {
    busy_wait: {
      bin: './monkey_patches/.bin/cucumber-js',
      args: ['-format', 'json', '-t', '~@wip', '--require', './features'],
      env: {
        WAIT: 'busy'
      }
    },
    sleep_wait: {
      bin: './monkey_patches/.bin/cucumber-js',
      args: ['-format', 'json', '-t', '~@wip', '--require', './features'],
      env: {
        WAIT: 'sleep'
      }
    }
  }
};