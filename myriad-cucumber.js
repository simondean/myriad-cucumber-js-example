module.exports = {
  package: '.',
  features: ['features'],
  profiles: {
    blue: {
      bin: 'node_modules/.bin/cucumber-js',
      args: ['-format', 'json', '-t', '@api']
    },
    red: {
      bin: 'node_modules/.bin/cucumber-js',
      args: ['-format', 'json', '-t', '@api']
    }
  }
};