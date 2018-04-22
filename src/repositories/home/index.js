import DefaultRepository from '../_defaultRepo'

import HomeModel from '../../models/home'
import uuid from 'uuid/v4'

class HomeRepository extends DefaultRepository {
    constructor(){
        super(HomeModel, ['residents'])
    }

    async addNew({ address, city, state, country }){
        var home = {
            id: uuid(),
            address,
            city,
            state,
            country
        }

        return await this.create(home)
    }
}

export default HomeRepository