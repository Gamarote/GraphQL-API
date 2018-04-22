import PeopleRelationsRepository from '../../repositories/people-relations'
import { getById, getAll } from '../commonResolvers'

const peopleRelationsRepository = new PeopleRelationsRepository()

const PeopleRelationsResolvers = {
    Query: {
        getPeopleRelationsById: getById(peopleRelationsRepository),
        getPeopleRelationsByRelation: async (_, { relation }) => await peopleRelationsRepository.getByRelation(relation),
        getAllPeopleRelations: getAll(peopleRelationsRepository)
    }
}