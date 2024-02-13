// Import necessary plugins and modules
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// Export a webpack configuration function
module.exports = () => {
  // Return the webpack configuration object
  return {
    // Set the development mode
    mode: 'development',

    // Entry points for the application
    entry: {
      main: './src/js/index.js',      // Main application logic
      install: './src/js/install.js', // Installation logic
    },

    // Output configuration
    output: {
      filename: '[name].bundle.js',                 // Output bundle filenames
      path: path.resolve(__dirname, 'dist'),        // Output directory path
    },

    // List of plugins used by webpack
    plugins: [
      // HTML generation plugin
      new HtmlWebpackPlugin({
        template: './index.html',  // Template HTML file
        title: 'Text Editor',      // Title for the generated HTML
      }),

      // Workbox service worker injection plugin
      new InjectManifest({
        swSrc: './src-sw.js',  // Service worker source file
        swDest: 'src-sw.js',   // Service worker destination file
      }),

      // Webpack PWA Manifest plugin
      new WebpackPwaManifest({
        fingerprints: false,                 // Disable fingerprinting
        inject: true,                        // Inject manifest into HTML
        name: 'Text Editor',                  // Application name
        short_name: 'JATE',                   // Short name for the launcher
        description: 'Just another text editor.',  // Application description
        background_color: '#225ca3',          // Background color
        theme_color: '#225ca3',                // Theme color
        start_url: './',                       // Start URL
        publicPath: './',                      // Public path
        icons: [
          {
            src: path.resolve('src/images/logo.png'),  // Icon source path
            sizes: [96, 128, 192, 256, 384, 512],      // Icon sizes
            destination: path.join('assets', 'icons'), // Icon destination path
          },
        ],
      }),
    ],

    // Module rules for handling different file types
    module: {
      rules: [
        {
          // CSS loaders
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          // JavaScript (ES6) loaders
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',               // Babel loader for transpiling
            options: {
              presets: ['@babel/preset-env'],    // Babel preset for ES6
              plugins: [
                '@babel/plugin-proposal-object-rest-spread', // Babel plugin for object rest/spread
                '@babel/transform-runtime',                  // Babel plugin for runtime transformations
              ],
            },
          },
        },
      ],
    },
  };
};
