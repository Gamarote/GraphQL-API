require('dotenv').load()

var poolMin, poolMax
try {
    poolMin = parseInt(process.env.POSTGRES_POOL_MIN)
    poolMax = parseInt(process.env.POSTGRES_POOL_MAX)
} catch(e) {
    console.error(e)
}

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
        min: poolMin || 1,
        max: poolMax || 1
    },
    debug: true
}