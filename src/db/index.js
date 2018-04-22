import knex from 'knex'
import bookshelf from 'bookshelf'
import config from './config'
import schema from './schema'

const Knex = knex(config)
const Bookshelf = bookshelf(Knex)
Bookshelf.plugin('registry')
Bookshelf.plugin(schema)

export const Knex
export default Bookshelf