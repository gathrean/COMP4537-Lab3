class Utils {
    static getDate() {
        return new Intl.DateTimeFormat('en-US', {
            timeStyle: 'medium',
            timeZone: 'America/Los_Angeles'
        }).format(new Date());
    }
}