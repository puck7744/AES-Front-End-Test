var browserify = require('browserify');
var jsx = require('node-jsx');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var path = require('path');

module.exports = function(app) {
  jsx.install();

  // Set up a simple render method to use later
  app.engine('jsx', function(filePath, options, callback) {
    return callback(
      null,
      ReactDOMServer.renderToStaticMarkup(require(filePath))
    );
  });
};
