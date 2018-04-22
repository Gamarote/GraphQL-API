import HomeType from '../../models/home/home-type'

const HomeQueries = `
    extend type Query {
        getHomeById (id: ID!): HomeType
        getAllHomes: [HomeType]
    }
`

export default () => [HomeQueries, HomeType]