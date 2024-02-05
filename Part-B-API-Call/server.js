// DISCLOSURE: I've used ChatGPT to code this lab.
// I've also tried my best to use OOP alongside the nodejs and server hosting.

// HOSTED URL: https://comp4537-lab3-gathrean.vercel.app
// NOTE: When name is not specified, the message will say Guest.
// - To specify name, add ?name=yourName to the end of the URL.

const http = require('http');
const url = require('url');
const Utils = require('./modules/utils');
const en = require('./lang/en/en');

class MyServer {
    constructor() {
        this.server = http.createServer(this.handleRequest.bind(this));
    }

    handleRequest(req, res) {
        const parsedUrl = url.parse(req.url, true);
        const name = parsedUrl.query.name;
        const currentTime = Utils.getCurrentTime();

        const message = `${en.greeting(name)} ${en.serverTime(currentTime)}`;

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