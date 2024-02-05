class Utils {
    static getCurrentTime() {
        const options = {
            timeZone: 'America/Los_Angeles',
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };

        return new Date().toLocaleTimeString('en-US', options);
    }
}

module.exports = Utils;