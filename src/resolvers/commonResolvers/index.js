export const getById = (repo) => ( async (_, { id }) => await repo.getById(id) )
export const getAll = (repo) => ( async () => await repo.getAll() )