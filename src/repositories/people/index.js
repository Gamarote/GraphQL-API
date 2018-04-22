import DefaultRepository from '../_defaultRepo'

import PeopleModel from '../../models/people'

class PeopleRepository extends DefaultRepository {
    constructor(){
        super(PeopleModel, ['home', 'hasRelationsTo'])
    }
}

export default PeopleRepository