"use strict";
var path = require('path');
var fs = require('fs');
var MASK_0777 = 484;
function ensureDirectory(dir_path, cb) {
    fs.mkdir(dir_path, MASK_0777, function (err) {
        if (err) {
            if (err.code == 'EEXIST') {
                cb(null);
            }
            else {
                cb(err);
            }
        }
        else
            cb(null);
    });
}
exports.ensureDirectory = ensureDirectory;
function ensureReadFile(file_path, cb) {
    var dir_path = path.dirname(file_path);
    var file_name = path.basename(file_path);
    ensureDirectory(dir_path, function (err) {
        fs.readFile(file_path, function (err, data) {
        });
    });
}
exports.ensureReadFile = ensureReadFile;
