"use strict";
var fs = require('fs');
var sql = require('sql.js');
var config = require('./config/config');
;
;
fs.readFile(config.db.location, function (err, data) {
});
var sqldb = new sql.Database(read_data);
function initializeDb(sqldb) {
    var query = "CREATE TABLE IF NOT EXISTS benchmark_results ()";
    sqldb.run(query);
}
function putBenchmarkData(data, done) {
}
