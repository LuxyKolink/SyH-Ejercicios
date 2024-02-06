const fs = require('fs')
const path = require('path')

const addDirToFile = (fileName, fileExt) => {
    return path.join(__dirname, `${fileName}.${fileExt}`)
}

const validateTotalData = async (csvDirFile) => {
    fs.readFile(csvDirFile, 'utf-8', (err, data) => {
        if (err) console.error(err);
        const csvDataToArray = data
        const separateArrayByLineFeed = csvDataToArray.split(/\r?\n/)
        const csvArrayTotalRegisterCounter = separateArrayByLineFeed.slice(-1)[0]
        const csvArrayCounterValue = csvArrayTotalRegisterCounter.split(':')
        const csvArraCounterValueToOnlyValue = csvArrayCounterValue.map(number => {
            if(!isNaN(number)) {
                return Number(number)
            } else {
                return number
            }
        }).filter(number => {
            if(typeof(number) === 'number') {
                return number
            }
        })[0]
        
        const totalRegistersOfSeparatedCsvArray = separateArrayByLineFeed.slice(1, -1)
        if (totalRegistersOfSeparatedCsvArray.length === csvArraCounterValueToOnlyValue) {
            console.log('Los registros están completos.');
        } else {
            console.log('Los registros están incompletos.');
        }

    })
}

module.exports = {
    validateTotalData,
    addDirToFile
}