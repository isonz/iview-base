//
// // 提取 *.vue 文件中的 CSS 到单个文件
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// module.exports = {
//
//     configureWebpack: {
//         module: {
//             rules: [
//                 {
//                     test: /\.vue$/,
//                     loader: 'vue-loader',
//                     options: {
//                         extractCSS: true
//                     }
//                 }
//             ]
//         },
//         plugins: [
//             new ExtractTextPlugin("css/style.css")
//         ]
//     }
//
// };
