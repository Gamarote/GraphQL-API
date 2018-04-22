import PeopleType from '../people/people-type'
import RelationsType from './relations-type'

const PeopleRelationsType = `
    type PeopleRelationsType {
        id: ID
        isRelated: PeopleType
        ofPerson: PeopleType
        relation: RelationsType
    }
`

export default () => [PeopleRelationsType, RelationsType, PeopleType]