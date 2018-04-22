import Bookshelf from '../../db'

const Home = Bookshelf.Model.extend({
    tableName: 'family.home',
    idAttribute: 'id',
    toJSON: () => Bookshelf.Model.prototype.toJSON.apply(this, arguments),
    residents: () => this.hasMany('People', 'home_id')
})

export default Bookshelf.model('Home', Home)