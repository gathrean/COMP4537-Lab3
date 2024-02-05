const http = require('http');
const url = require('url');
const { getCurrentTime } = require('./utils');

class MyServer {
    constructor() {
        this.server = http.createServer(this.handleRequest.bind(this));
    }

    handleRequest(req, res) {
        const parsedUrl = url.parse(req.url, true);
        const name = parsedUrl.query.name;
        const currentTime = getCurrentTime();

        const message = `<p style="color: blue;">Hello, ${name}! The server time is ${currentTime}.</p>`;

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(message);
    }

    start(port) {
        this.server.listen(port, () => {
            console.log(`Server running on port ${port}.`);
        });
    }
}

const myServer = new MyServer();
myServer.start(8089);