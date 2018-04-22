import PeopleModel from '../../models/people'

class PeopleRepository {
    async getAll() {
        let result = await PeopleModel.fetchAll({
            withRelated: ['home', 'familyMembers']
        })

        return result !== null ? result.toJSON() : []
    }

    async getById(id){
        var qWhere = { id }

        let result = await PeopleModel.where(qWhere).fetch({
            withRelated: ['home', 'familyMembers']
        })

        return result !== null ? result.toJSON() : null
    }
}

export default PeopleRepository