const http = require('http');
const path = require('path');
const fs = require('fs');

const start = function (callback) {
  const server = http.createServer(function (req, res) {
    let filepath = path.join(__dirname, '_site', req.url);
    try {
      const stat = fs.statSync(filepath);
      if (stat.isDirectory(filepath)) {
        filepath = path.join(filepath, 'index.html');
      }
      fs.stat(filepath, (err, stat) => {
        if (stat) {
          fs.createReadStream(filepath).pipe(res);
        }
      })
    } catch (e) {
      fs.createReadStream(path.join(__dirname, '_site', 'index-cn.html')).pipe(res);
    }

  });
  server.listen(9999, '127.0.0.1', () => {
    console.log('http server start on port 9999;');
    callback();
  });
}
module.exports = {
  start
}