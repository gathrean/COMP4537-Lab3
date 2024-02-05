const http = require('http');
const url = require('url');
const utils = require('./modules/utils');

http.createServer(function (req, res) {
  const parsedUrl = url.parse(req.url, true);
  const name = parsedUrl.query.name;
  const currentTime = utils.getDate();

  const message = `<p style="color: blue;">Hello, ${name || 'Guest'}! The server time is ${currentTime}.</p>`;

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(message);
}).listen(8089);

console.log('Server running on port 8089.');