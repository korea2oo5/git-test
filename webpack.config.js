// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// module.exports = {
//   mode: "development",
//   entry: {
//     app: "./src/index.js"
//   },
//   //   entry: {
//   //     app: "./src/index.js",
//   //     // 코드스플리팅1
//   //     another:"./src/another-module.js"
//   //   },
//   //   devtool: "inline-source-map",
//   //   가장 좋은 성능을 내는 source-map
//   devtool: "eval-cheap-module-source-map",
//   //   webpack-dev-server에 localhost:3000에 있는 ./dist를 참조하라는 명령어
//   devServer: {
//     contentBase: path.join(__dirname, "dist"),
//     hot: true,
//     port: 3000,
//     open: true
//   },
//   output: {
//     //   entry의 key값이 name으로 들어감
//     filename: "[name].[contenthash].js",
//     path: path.resolve(__dirname, "dist")
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader"]
//       },
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/i,
//         type: "asset/resource"
//       },
//       {
//         test: /\.(woff|woff2|eot|ttf|otf)$/i,
//         type: "asset/resource"
//       }
//     ]
//   },
//   //   공통으로 사용하는 모듈을 vendor로 따로생성하는 명령어
//   //   벤더를 만드는 이유는 다음과 같습니다.
//   //   A 청크가 (a, b, c) 패키지를 가지고 있고, B 청크가 (a, b, d) 패키지를 가지고 있다면, a와 b 패키지가 겹치기 때문에 두 번 불러와서 쓸데없는 용량을 잡아먹습니다.
//   //   이런 것은 vendor~A~B (a, b)로 만들어주고, A 청크는 (c), B 청크는 (d)로 만들어 중복을 최소화해줍니다.
//   optimization: {
//     //   참조값이 바뀌어도 파일자체가 변경된거 아니면 해쉬값 유지(캐시값 사용)
//     moduleIds: "hashed",
//     // 웹팩런타임(웹팩 실행코드)를 가장 마지막에 생성된 chunk에 넣는데 그파일이 vendor. chunk가 새로 생성되면 다시 웹팩실행코드가 실행됨
//     // 이걸 막기위해 runtimeChunk를 사용해서 캐쉬화함
//     // "single" only when using multiple entrypoints in one HTML page.
//     // You only need a runtime chunk when using long term caching and on demand loading.
//     // optimization.runtimeChunk: true
//     runtimeChunk: true,
//     // node_modules를 캐쉬화 하고 vendor chunck 추출
//     // 애플레이션 코드에 변경이 생길시 vendor파일은 변경을 하지말라는 옵션(변경할 필요 X)
//     splitChunks: {
//       cacheGroups: {
//         vendor: {
//           test: /[\\/]node_modules[\\/]/,
//           name: "vendors",
//           chunks: "all"
//         }
//       }
//     }
//   },

//   plugins: [
//     //   빌드시 기존파일들 전부삭제하고 다시만듬
//     new CleanWebpackPlugin(),
//     // index.html을 생성하고 번들결과를 포함시켜주는 모듈
//     new HtmlWebpackPlugin({
//       title: "Hot Module Replacement"
//     })
//   ]
// };

// test
