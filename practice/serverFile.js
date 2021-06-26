const path = require('path')
const fs = require('fs')


//=====================FUNCTION TO READFILE TO SERVER========================

            //=========CODE DOCUMENTATION=========//

/**
 * @description This helper function reads file from a directory and returns a function
 * @param {string} pathToFile 
 * @returns {object} return file object and utility data
 * 
 */


function readFileToServer(pathToFile) {
    let data = fs.readFileSync(pathToFile, 'utf-8')
    return{
        file: data
    }
}

module.exports = readFileToServer;