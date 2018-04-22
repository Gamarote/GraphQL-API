import { makeExecutableSchema } from 'graphql-tools'

import types from '../models'
import queries from '../queries'
import mutations from '../mutations'
import resolvers from '../resolvers'

const initSchema = `
    schema {
        query: Query
        mutation: Mutation
    }
`

export default makeExecutableSchema({
    typeDefs: [
        initSchema,
        types,
        queries,
        mutations
    ],
    resolvers
})