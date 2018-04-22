import DefaultRepository from '../_defaultRepo'

import PeopleRelationsModel from '../../models/people-relations'

class PeopleRelationsRepository extends DefaultRepository {
    constructor(){
        super(PeopleRelationsModel, ['isRelated', 'ofPerson'])
    }

    async getByRelation(relation){
        var qWhere = { relation }

        let result = await PeopleRelationsModel.where(qWhere).fetchAll({
            withRelated: ['isRelated', 'ofPerson']
        })

        return result !== null ? result.toJSON() : []
    }
}

export default PeopleRelationsRepository