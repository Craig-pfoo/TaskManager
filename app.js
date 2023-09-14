const TestApplication = require('./logger');
const fs = require('fs');

const testApplication = new TestApplication();

testApplication.on('loadApplication', (message) => {
    fs.appendFile('./logger.txt', 'Application loaded!\n', (error) => {
      if (error) {
        console.error('Error occurred while appending to logger.txt:', error.message);
      } else {
        console.log('Finished!');
      }
    });
  });

testApplication.loadApplication('Application is loading...');