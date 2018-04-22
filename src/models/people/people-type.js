import HomeType from '../home/home-type'

const PeopleType = `
    type PeopleType {
        id: ID
        name: String
        age: Int
        home: HomeType
        hasRelationsTo: [PeopleType]
    }
`

export default () => [PeopleType, HomeType]