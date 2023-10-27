const knex = require('knex')({
    client: 'pg',
    connection: {
        user: 'postgres',
        host: 'localhost',
        database: 'projeto_ipobre',
        password: '1805',
        port: 5432,
    },
})

module.exports = knex