import Bookshelf from 'bookshelf'

const PeopleRelations = Bookshelf.Model.extend({
    tableName: 'family.people_relations',
    toJSON: () => Bookshelf.Model.prototype.toJSON.apply(this, arguments),
    person1: () => this.belongsTo('People', 'person_1'),
    person2: () => this.belongsTo('People', 'person_2')
})

export default Bookshelf.model('PeopleRelations', PeopleRelations)