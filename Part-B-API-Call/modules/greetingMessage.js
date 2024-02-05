class GreetingMessage {
    constructor(name) {
        this.messageTemplate = require('../lang/en/en');
        this.name = name || 'Guest';
    }

    getFormattedMessage(currentTime) {
        return this.messageTemplate.replace('%1', this.name).replace('%2', currentTime);
    }
}

module.exports = GreetingMessage;