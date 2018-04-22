import PeopleRepository from '../../repositories/people'
import { getById, getAll } from '../commonResolvers'

const peopleRepository = new PeopleRepository()

const PeopleResolvers = {
    Query: {
        getPersonById: getById(peopleRepository),
        getAllPeople:getAll(peopleRepository)
    }
}

export default PeopleResolvers