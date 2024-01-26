// const { format } = require('date-fns');

// const date = format(new Date(), 'yyyyMMdd\tHH:mm:ss')

// console.log(date);

const { v4: uuid } = require('uuid');

const id = uuid();

console.log(id);

