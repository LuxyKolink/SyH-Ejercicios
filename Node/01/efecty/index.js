const { validateTotalData, addDirToFile } = require('./module')

const csvDirFile = addDirToFile('efecty', 'txt');
validateTotalData(csvDirFile);