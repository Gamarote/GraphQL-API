export default class DefaultRepository {
    constructor(Model, relations){
        if(new.target === DefaultRepository) throw new Error('This class cannot be instaciated')

        this.Model = Model
        this.relations = relations
    }

    async getAll() {
        let result = await this.Model.fetchAll({
            withRelated: this.relations
        })

        return result !== null ? result.toJSON() : []
    }

    async getById(id){
        var qWhere = { id }

        let result = await this.Model.where(qWhere).fetch({
            withRelated: this.relations
        })

        return result !== null ? result.toJSON() : null
    }

    async create(instance){
        var result
        try {
            result = await new this.Model(instance).save(null, { method: 'insert' })
        } catch(e) {
            console.error(e)
            result = null
        }

        return result !== null
    }

    async addNew(args) {
        // Override this function
    }
}