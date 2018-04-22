import Bookshelf from '../../db'
import { merge } from 'lodash'

import '../home'
import '../people-relations'

const People = Bookshelf.Model.extend({
    tableName: 'family.people',
    idAttribute: 'id',
    toJSON() {
        return Bookshelf.Model.prototype.toJSON.apply(this, arguments)
    },
    home() {
        return this.belongsTo('Home', 'home_id')
    },
    hasRelationsTo() {
        return this.belongsToMany('People', 'family.people_relations', 'is_related', 'of_person')
    }
})

export default Bookshelf.model('People', People)