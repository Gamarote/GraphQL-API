import knex from 'knex'
import bookshelf from 'bookshelf'
import config from './config'
import schema from './schema'

export const Knex = knex(config)
const Bookshelf = bookshelf(Knex)
Bookshelf.plugin('registry')
Bookshelf.plugin(schema)

export default Bookshelf