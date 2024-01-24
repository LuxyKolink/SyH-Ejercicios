const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
const date = format(new Date(), 'yyyyMMdd\tHH:mm:ss')
const id = uuid();

console.log(date);
console.log(id);
