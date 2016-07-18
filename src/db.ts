import fs = require('fs');
import path = require('path');

import sql = require('sql.js');

import config = require('./config/config');

interface TestData {
  name: string,
  ops: number
};

interface BenchmarkData {
  results: TestData[],
  browser: {name: string, version: string},
  engine: {name: string, version: string},
  os: {name: string, version: string},
  cpu: string,
  rawUA: string
};

fs.readFile(config.db.location, (err, data) => {

});
var sqldb = new sql.Database(read_data);

function initializeDb(sqldb: sql.Database) {
  var query = "CREATE TABLE IF NOT EXISTS benchmark_results ()";
  sqldb.run(query);
}

function putBenchmarkData(data: BenchmarkData, done: Function) {

}
