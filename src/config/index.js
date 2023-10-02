module.exports = {
  source: ['src/tokens/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'dist/',
      files: [{
        destination: 'variables.scss',
        format: 'scss/variables'
      }]
    },
    css: {
      transformGroup: 'css',
      buildPath: 'dist/',
      files: [{
        destination: 'css.css',
        format: 'css/variables'
      }]
    }
  }
}
