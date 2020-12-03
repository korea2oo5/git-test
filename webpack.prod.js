const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  optimization: {
    //   참조값이 바뀌어도 파일자체가 변경된거 아니면 해쉬값 유지(캐시값 사용)
    moduleIds: "deterministic",
    // 웹팩런타임(웹팩 실행코드)를 가장 마지막에 생성된 chunk에 넣는데 그파일이 vendor. chunk가 새로 생성되면 다시 웹팩실행코드가 실행됨
    // 이걸 막기위해 runtimeChunk를 사용해서 캐쉬화함
    // "single" only when using multiple entrypoints in one HTML page.
    // You only need a runtime chunk when using long term caching and on demand loading.
    // optimization.runtimeChunk: true
    runtimeChunk: true,
    // node_modules를 캐쉬화 하고 vendor chunck 추출
    // 애플레이션 코드에 변경이 생길시 vendor파일은 변경을 하지말라는 옵션(변경할 필요 X)
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist")
  }
};
