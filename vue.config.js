const path = require("path")

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias.set("@Assets", path.join(__dirname, "src/assets/"),)
  },
}
