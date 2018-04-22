import HomeType from '../home/home-type'

const PeopleType = `
    type PeopleType {
        id: ID
        name: String
        age: Int
        home: HomeType
        familyMembers: [PeopleType]
    }
`

export default () => [PeopleType, HomeType]