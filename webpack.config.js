const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader')

module.exports = (env, argv) => {
  const isProductionBuild = argv.mode === 'production'
  // const publicPath = '/w4v2tw2/'
  const publicPath = ''

  const css = {
    test: /\.css$/i,
    use: [
      isProductionBuild ? MiniCssExtractPlugin.loader : 'vue-style-loader',
      'css-loader',
      'postcss-loader',
    ],
  }

  const vue = {
    test: /\.vue$/,
    loader: "vue-loader",
  };

  const js = {
    test: /\.m?js$/,
    exclude: file => (
      /node_modules/.test(file) &&
      !/\.vue\.js/.test(file)
    ),
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-transform-runtime','@babel/plugin-syntax-dynamic-import']
      }
    }
  };

  const files = {
    test: /\.(webp|webm|png|jpe?g|gif|woff2?)$/i,
    loader: "file-loader",
    options: {
      name: "[hash].[ext]",
    },
  };

  const config = {
    entry: {
      main: './src/main.js',
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].[hash].build.js',
      publicPath: isProductionBuild ? publicPath : '',
      chunkFilename: '[chunkhash].js',
    },
    module: {
      rules: [css, vue, js, files],
    },
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
        images: path.resolve(__dirname, "./src/assets/images"),
        fonts: path.resolve(__dirname, "./src/assets/fonts"),
        components: path.resolve(__dirname, "./src/components"),
      },
      extensions: ["*", ".js", ".vue", ".json"],
    },
    devServer: {
      historyApiFallback: true,
      noInfo: false,
      overlay: true,
    },
    performance: {
      hints: false,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
        chunks: ['main'],
        minify: true,
        favicon: `./public/favicon.ico`
      }),
      new VueLoaderPlugin()
    ],
    devtool: '#eval-source-map',
  }

  if (isProductionBuild) {
    config.devtool = 'none'
    config.plugins = (config.plugins || []).concat([
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"',
        },
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[contenthash].css',
      }),
    ])

    config.optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: true
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    }
  }

  return config
}
