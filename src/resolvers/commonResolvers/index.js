export default {
    getById: (repo) => ( async (_, { id }) => await repo.getById(id) ),
    getAll: (repo) => ( async () => await repo.getAll() )
}