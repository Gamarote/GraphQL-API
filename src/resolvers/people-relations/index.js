import PeopleRelationsRepository from '../../repositories/people-relations'
import { getAll } from '../commonResolvers'

const peopleRelationsRepository = new PeopleRelationsRepository()

const PeopleRelationsResolvers = {
    Query: {
        getPeopleRelationsByRelation: async (_, { relation }) => await peopleRelationsRepository.getByRelation(relation),
        getAllPeopleRelations: getAll(peopleRelationsRepository)
    }
}