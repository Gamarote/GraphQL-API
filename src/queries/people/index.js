import PeopleType from '../../models/people/people-type'

const PeopleQueries = `
    extend type Query {
        getPersonById (id: ID!): PeopleType 
        getAllPeople: [PeopleType]
    }
`

export default () => [PeopleQueries, PeopleType]