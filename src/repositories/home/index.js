import HomeModel from '../../models/home'
import uuid from 'uuid/v4'

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

    async addNew({ address, city, state, country }){
        var home = {
            id: uuid(),
            address,
            city,
            state,
            country
        }

        var newHome = new HomeModel(home).save(null, { method: 'insert' })

        var result
        try {
            result = await newHome
        } catch(e) {
            console.error(e)
            result = null
        }

        return result !== null
    }
}

export default HomeRepository