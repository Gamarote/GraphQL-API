import { makeExecutableSchema } from 'graphql-tools'

import types from '../models'
import queries from '../queries'
import resolvers from '../resolvers'

const initSchema = `
    schema {
        query: Query
    }
`

export default makeExecutableSchema({
    typeDefs: [
        initSchema,
        types,
        queries
    ],
    resolvers
})