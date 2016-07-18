"use strict";
var express = require('express');
var http = require('http');
var App = (function () {
    function App(options) {
        this.app = express();
        this.app.use(express.static('static'));
        this.initRoutes();
    }
    App.prototype.initRoutes = function () {
        this.app.get('/', function (req, res) {
            res.send('Hello, World!');
        });
    };
    return App;
}());
function listen(app, port) {
    if (port === void 0) { port = 4444; }
    var server = http.createServer(app);
    server.listen(port);
}
function main() {
    var app = new App('static');
    listen(app.app, 4444);
}
main();
