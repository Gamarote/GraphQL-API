import PeopleRelationsModel from '../../models/people-relations'

class PeopleRelationsRepository {
    async getAll() {
        let result = await PeopleRelationsModel.fetchAll({
            withRelated: ['isRelation', 'ofPerson']
        })

        return result !== null ? result.toJSON() : []
    }

    async getById(id){
        var qWhere = { id }

        let result = await PeopleRelationsModel.where(qWhere).fetch({
            withRelated: ['isRelation', 'ofPerson']
        })

        return result !== null ? result.toJSON() : null
    }

    async getByRelation(relation){
        var qWhere = { relation }

        let result = await PeopleRelationsModel.where(qWhere).fetchAll({
            withRelated: ['isRelation', 'ofPerson']
        })

        return result !== null ? result.toJSON() : []
    }
}

export default PeopleRelationsRepository