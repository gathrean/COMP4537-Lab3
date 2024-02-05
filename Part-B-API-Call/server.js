const http = require('http');
const url = require('url');
const utils = require('./modules/utils');
const greetingMessage = require('./lang/en/en');

http.createServer(function (req, res) {
  const parsedUrl = url.parse(req.url, true);
  const name = parsedUrl.query.name;
  const currentTime = utils.getDate();

  const formattedMessage = greetingMessage.replace('%1', name || 'Guest').replace('%2', currentTime);

  const message = `<p style="color: blue;">${formattedMessage}</p>`;

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(message);
}).listen(8089);

console.log('Server running on port 8089.');
