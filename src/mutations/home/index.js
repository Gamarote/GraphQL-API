const HomeMutations = `
    extend type Mutation {
        addNewHome (address: String!, city: String!, state: String!, country: String!): Boolean
    }
`

export default HomeMutations