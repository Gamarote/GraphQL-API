import PeopleType from '../people/people-type'
import RelationsType from './relations-type'

const PeopleRelationsType = `
    type PeopleRelationsType {
        person1: PeopleType
        person2: PeopleType
        relation: RelationsType
    }
`

export default () => [PeopleRelationsType, RelationsType, PeopleType]