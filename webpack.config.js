const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 
module.exports = [{
  entry: {
    index:"./src/index.ts",
    works:"./src/works.ts"
  },
  module: {
    rules: [
      {
        test: /\.worker\.js$|\.worker\.ts$/,
        use: { loader: "worker-loader" },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  watch:true,
  target:['web', 'es6'],
  mode:'development'
},{
  entry: {
    index:"./src/sass/index.scss",
    works:"./src/sass/works.scss"
  },
  output: {
    path: path.resolve(__dirname, 'css'),
    filename: "[name].js",
  },
  plugins: [
    // 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
    new MiniCssExtractPlugin({ filename: '[name].css'})
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map',
  mode: 'development'
}];