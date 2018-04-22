import PeopleRelationsType from '../../models/people-relations/people-relations-type'
import RelationsType from '../../models/people-relations/relations-type'

const PeopleRelationsQueries = `
    extend type Query {
        getPeopleRelationsByRelation (relation: RelationsType!): [PeopleRelationsType]
    }
`

export default () => [PeopleRelationsQueries, PeopleRelationsType, RelationsType]