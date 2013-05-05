module.exports = {
  package: '.',
  features: ['features'],
  profiles: {
    blue: {
      bin: 'node_modules/.bin/cucumber-js',
      args: ['-format', 'json', '-t', '@blue']
    },
    red: {
      bin: 'node_modules/.bin/cucumber-js',
      args: ['-format', 'json', '-t', '@red']
    }
  }
};