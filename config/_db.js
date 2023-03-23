const mariadb = require('maraidb');


const pool = mariadb.createPool({

    host: 'db server',
    user: 'db user',
    password: 'db user pass',
    connectionLimit: 5,
    database: 'express_checkout'
});

module.exports = pool; //export the pool so we can use it