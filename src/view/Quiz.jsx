var React = require('react');

module.exports = function(options) {
  return (
    <html>
      <head>
        <title>Sample Quiz</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <div id="canvas" className="container" />
        <script id="initial-data" data-json={JSON.stringify(options._locals.questions)} />
        <script src="/bundle.js" />
      </body>
    </html>
  )
}
