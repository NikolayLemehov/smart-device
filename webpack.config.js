const path = require(`path`);
const {CleanWebpackPlugin} = require(`clean-webpack-plugin`);

module.exports = {
  context: path.resolve(__dirname, `source`),
  mode: `development`, // Режим сборки
  entry: `./js/main.js`, // Точка входа приложения
  output: {// Настройка выходного файла
    filename: `bundle.js`,
    path: path.join(__dirname, `build/js`),
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: `babel-loader`,
          options: {
            presets: [`@babel/preset-env`]
          },
        },
      },
    ],
  },
};
