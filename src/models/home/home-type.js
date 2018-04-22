import PeopleType from '../people/people-type'

const HomeType = `
    type HomeType {
        id: ID
        address: String
        city: String
        state: String
        country: String
        residents: [PeopleType]
    }
`

export default () => [HomeType, PeopleType]