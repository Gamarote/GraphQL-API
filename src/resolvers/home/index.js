import HomeRepository from '../../repositories/home'
import { getById, getAll, addNew } from '../_commonResolvers'

const homeRepository = new HomeRepository()

const HomeResolvers = {
    Query: {
        getHomeById: getById(homeRepository),
        getAllHomes: getAll(homeRepository)
    },
    Mutation: {
        addNewHome: addNew(homeRepository)
    }
}

export default HomeResolvers