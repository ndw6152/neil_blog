const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const buildMode = process.env.NODE_ENV || 'development'; // Default to 'development' if NODE_ENV is not set

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js', // Use content hash for cache-busting
    clean: true, // Clean the output directory before each build
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.module\.scss$/, // Handle SCSS modules (files ending with .module.scss)
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into separate files
          {
            loader: 'css-loader',
            options: {
              modules: {
                namedExport: false,
                exportLocalsConvention: 'as-is',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.scss$/, // Handle global SCSS files (not modules)
        exclude: /\.module\.scss$/, // Exclude .module.scss files
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into separate files
          'css-loader', // No modules option here
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body', // Inject JS files into the body (default behavior)
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css', // Output CSS file name with content hash
    }),
  ],
  optimization: {
    minimize: true, // Minimize JavaScript
    minimizer: [
      new TerserPlugin({
        parallel: true, // Use multiple cores for faster minification
      }),
    ],
    splitChunks: {
      chunks: 'all', // Split dependencies into separate chunks
      maxInitialRequests: 5, // Control number of initial requests
      minSize: 0, // Prevent the creation of small bundles
      maxSize: 100000, // Set a max size for chunks, if needed
    },
  },
  devServer: {
    historyApiFallback: true, // Fallback to index.html for all routes
    static: './dist',
    port: 3000,
    open: true, // Optionally open the browser automatically
  },
  devtool: buildMode === 'production' ? 'source-map' : 'eval-source-map', // Use different source maps depending on mode
  mode: buildMode,
};
