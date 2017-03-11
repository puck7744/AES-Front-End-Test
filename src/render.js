var browserify = require('browserify');
var jsx = require('node-jsx');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var path = require('path');

module.exports = function(app) {
  jsx.install();

  // This app's load will be low so we can bundle client-side code on the fly
  app.use('/bundle.js', function(req, res) {
    res.setHeader('content-type', 'application/javascript');
    browserify('src/client.js')
      .transform('reactify')
      .bundle()
      .pipe(res);
  });

  // Set up a simple render method to use later
  app.engine('jsx', function(filePath, options, callback) {
    let view = require(filePath);

    return callback(
      null,
      ReactDOMServer.renderToStaticMarkup(view(options))
    );
  });
};
