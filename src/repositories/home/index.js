import HomeModel from '../../models/home'

class HomeRepository {
    async getAll() {
        let result = await HomeModel.fetchAll({
            withRelated: ['residents']
        })

        return result !== null ? result.toJSON() : []
    }

    async getById(id){
        var qWhere = { id }

        let result = await HomeModel.where(qWhere).fetch({
            withRelated: ['residents']
        })

        return result !== null ? result.toJSON() : null
    }
}

export default HomeRepository