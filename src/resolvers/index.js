import { merge } from 'lodash'

import PeopleResolvers from './people'
import HomeResolvers from './home'
import PeopleRelationsResolvers from './people-relations'

export default merge(
    PeopleResolvers,
    HomeResolvers,
    PeopleRelationsResolvers
)