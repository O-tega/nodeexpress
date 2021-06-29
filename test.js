const fs = require('fs');
const path = require('path');

/**
 * @description  this helper function reads a file from our server directory and returns and object
 * @param {string} pathToFile
 * @returns {object} return file object and utility data
 */
function readFileToServer(pathToFile) {
  let data = fs.readFileSync(pathToFile, 'utf-8');
  return {
    file: data,
  };
}

module.exports = readFileToServer;
