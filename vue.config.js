module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/styles/_colors.scss";'
      }
    }
  }
}
