require('dotenv').load()
module.exports = {
    client: 'pg',
    seeds: {
        directory: './seeds'
    },
    connection: {
        database: process.env.POSTGRES_DB || 'teste',
        host: process.env.POSTGRES_HOST || 'localhost',
        port: 5432,
        user: process.env.POSTGRES_USER || 'postgres',
        password: process.env.POSTGRES_PASSWORD || '123quatro',
        charset: 'utf8'
    },
    pool: {
        min: process.env.POSTGRES_POOL_MIN || 1,
        max: process.env.POSTGRES_POOL_MAX || 1
    },
    debug: true
}