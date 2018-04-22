import Bookshelf from '../../db'

import '../people'

const PeopleRelations = Bookshelf.Model.extend({
    tableName: 'family.people_relations',
    idAttribute: 'id',
    toJSON() {
        return Bookshelf.Model.prototype.toJSON.apply(this, arguments)
    },
    isRelation() {
        return this.belongsTo('People', 'is_relation')
    },
    ofPerson() {
        return this.belongsTo('People', 'of_person')
    }
})

export default Bookshelf.model('PeopleRelations', PeopleRelations)