const { getDirectoryPath, filterListFilesByExtensionName } = require('./module')

const directory = getDirectoryPath('public');
console.log(directory);