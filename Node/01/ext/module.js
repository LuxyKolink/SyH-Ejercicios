const fs = require('fs')
const path = require('path')

const getDirectoryPath = (directory) => {
    return path.join(__dirname, `${directory}`)
}

const filterListFilesByExtensionName = (fileDir, fileExt) => {
    return console.error('Not implemented');
}

module.exports = {
    getDirectoryPath,
    filterListFilesByExtensionName
}