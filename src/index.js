`use strict`

import 'babel-polyfill'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

import schema from './schema'

var app = express()

app.set('PORT', process.env.PORT || 8000)
app.use(cors())
app.use(bodyParser.json())

// --- Set up GraphQL ---
app.use('/graphql', 
    graphqlExpress({ schema: schema })
)

app.use('/graphiql',
    graphiqlExpress({ endpointURL: '/graphql' })
)
// --------------

app.listen(app.get('PORT'), ()=>{
    console.log(`Express server listening on port ${app.get('PORT')}`)
})
