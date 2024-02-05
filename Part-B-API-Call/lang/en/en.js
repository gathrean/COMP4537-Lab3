module.exports = {
    greeting: name => `<p style="color: blue;">Hello, ${name || 'Guest'}!`,
    serverTime: time => `The server time is ${time}. GMT-0800 (Pacific Standard Time)</p>`
};