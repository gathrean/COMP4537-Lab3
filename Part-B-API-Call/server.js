const http = require('http');
const url = require('url');
const GreetingMessage = require('./modules/greetingMessage.js');
const Utils = require('./modules/utils.js');

class Server {
    constructor() {
        this.server = http.createServer(this.handleRequest.bind(this));
        this.port = 8089;
    }

    start() {
        this.server.listen(this.port, () => {
            console.log(`Server running on port ${this.port}.`);
        });
    }

    handleRequest(req, res) {
        const parsedUrl = url.parse(req.url, true);
        const name = parsedUrl.query.name;
        const currentTime = Utils.getDate();

        // Get greeting from greetingMessage module
        const greeting = new GreetingMessage(name);
        const formattedMessage = greeting.getFormattedMessage(currentTime);
        const message = `<p style="color: blue;">${formattedMessage}</p>`;

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(message);
    }
}

const server = new Server();
server.start();