const { cypressConfigResolver } = require('../config/cypress-config-resolver');

const pluginExecuteCommand = command => {
  return new Promise((resolve, reject) => {
    const apiUrl = cypressConfigResolver().apiBaseUrl;
    setTimeout(() => {
      resolve(`${command} execution simulated after 5 secs ${apiUrl}`);
    }, 5000);
  });
};

module.exports = pluginExecuteCommand;