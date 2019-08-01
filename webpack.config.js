// 提取 CSS 到单个文件
var ExtractTextPlugin = require("extract-text-webpack-plugin")
module.exports = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ]
}


