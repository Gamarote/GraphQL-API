import Bookshelf from '../../db'

import '../people'

const Home = Bookshelf.Model.extend({
    tableName: 'family.home',
    idAttribute: 'id',
    toJSON() {
        return Bookshelf.Model.prototype.toJSON.apply(this, arguments)
    },
    residents() {
        return this.hasMany('People', 'home_id')
    }
})

export default Bookshelf.model('Home', Home)