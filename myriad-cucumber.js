module.exports = {
  package: '.',
  features: ['features'],
  profiles: {
    blue: {
      bin: 'monkey_patches/.bin/cucumber-js',
      args: ['-format', 'json', '-t', '@api']
    },
    red: {
      bin: 'monkey_patches/.bin/cucumber-js',
      args: ['-format', 'json', '-t', '@api']
    }
  }
};