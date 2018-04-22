import PeopleRelationsModel from '../../models/people-relations'

class PeopleRelationsRepository {
    async getAll() {
        let result = await PeopleRelationsModel.fetchAll({
            withRelated: ['person1', 'person2']
        })

        return result !== null ? result.toJSON() : []
    }

    async getByRelation(relation){
        qWhere = { relation }

        let result = await PeopleRelationsModel.where(qWhere).fetch({
            withRelated: ['person1', 'person2']
        })

        return result !== null ? result.toJSON() : []
    }
}

export default PeopleRelationsRepository