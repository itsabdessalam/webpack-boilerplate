const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const config = require("../config");

module.exports = merge(common, config.dev);
