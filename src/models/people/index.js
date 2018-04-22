import Bookshelf from '../../db'

const People = Bookshelf.Model.extend({
    tableName: 'family.people',
    idAttribute: 'id',
    toJSON: () => Bookshelf.Model.prototype.toJSON.apply(this, arguments),
    home: () => this.belongsTo('Home', 'home_id'),
    familyMembers: () => this.belongsToMany('People').through('PeopleRelations')
})

export default Bookshelf.model('People', People)