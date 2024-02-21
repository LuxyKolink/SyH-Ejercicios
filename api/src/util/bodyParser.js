module.exports = function bodyParser(request) {
    return new Promise((resolve, reject) => {
        let totalData = ''
        request.on('data', chunk => {
            totalData += chunk
        })
        request.on('end', () => {
            request.body = JSON.parse(totalData);
            resolve();
        })
        request.on('error', (e) => {
            console.error(e);
            reject();
        })
    })
}