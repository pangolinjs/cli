module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 3
    },
    cssnano: process.env.NODE_ENV === 'production'
      ? {}
      : false
  }
}
