const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 
module.exports = [{
  entry: "./src/index.ts",
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
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  watch:true,
  target:['web', 'es6'],
  mode:'development'
},{
  entry: './src/sass/import.scss',
  output: {
    path: path.resolve(__dirname, 'css')
  },
  plugins: [
    // 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
    new MiniCssExtractPlugin({ filename: 'import.css'})
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