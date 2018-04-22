import PeopleQueries from './people'
import HomeQueries from './home'
import PeopleRelationsQueries from './people-relations'

const initialQuery = `
    type Query
`

export default () => [
    initialQuery,
    PeopleQueries,
    HomeQueries,
    PeopleRelationsQueries
]