function getDate() {
    return new Intl.DateTimeFormat('en-US', {
      timeStyle: 'medium',
      timeZone: 'America/Los_Angeles'
    }).format(new Date());
  }
  
  module.exports = {
    getDate,
  };