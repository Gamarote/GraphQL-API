import PeopleRelationsType from '../../models/people-relations/people-relations-type'
import RelationsType from '../../models/people-relations/relations-type'

const PeopleRelationsQueries = `
    extend type Query {
        getPeopleRelationsById (id: ID!): PeopleRelationsType
        getPeopleRelationsByRelation (relation: RelationsType!): [PeopleRelationsType]
        getAllPeopleRelations: [PeopleRelationsType]
    }
`

export default () => [PeopleRelationsQueries, PeopleRelationsType, RelationsType]