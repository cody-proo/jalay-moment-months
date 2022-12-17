const moment = require("moment-jalaali");

for (let index = 1; index <= 12; index++) {
    const x = moment(new Date()).locale("fa")
    x.add(4, 'day');
    x.add(index, 'jMonth')
    console.log(x.format('jYYYY-jM-jD'))
}

