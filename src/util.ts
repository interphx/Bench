import path = require('path');
import fs = require('fs');

var MASK_0777 = 484;

export function ensureDirectory(dir_path: string, cb: (err: any) => void) {
    fs.mkdir(dir_path, MASK_0777, function(err) {
        if (err) {
            if (err.code == 'EEXIST') {
              cb(null);
            } else {
              cb(err);
            }
        } else cb(null);
    });
}

export function ensureReadFile(file_path: string, cb: Function) {
  var dir_path = path.dirname(file_path);
  var file_name = path.basename(file_path);
  ensureDirectory(dir_path, (err: Error) => {
    fs.readFile(file_path, (err, data) => {
      
    });
  });
}
