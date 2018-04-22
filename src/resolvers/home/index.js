import HomeRepository from '../../repositories/home'
import { getById, getAll } from '../commonResolvers'

const homeRepository = new HomeRepository()

const HomeResolvers = {
    Query: {
        getHomeById: getById(homeRepository),
        getAllHomes: getAll(homeRepository)
    }
}

export default HomeResolvers