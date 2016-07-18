import express = require('express');
import http = require('http');

class App {
  app: express.Express

  constructor(options: {
    staticDir?: string
  }) {
    this.app = express();
    this.app.use(express.static('static'));
    this.initRoutes();
  }

  initRoutes() {
    this.app.get('/', (req, res) => {
      res.send('Hello, World!');
    });
  }
}

function listen(app: express.Express, port=4444) {
  var server = http.createServer(app);
  server.listen(port);
}

function main() {
  var app = new App('static');
  listen(app.app, 4444);
}

main();
