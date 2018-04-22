import Joi from 'joi'
import _ from 'lodash'

export default (bookshelf) => {
    var Model = bookshelf.Model
    bookshelf.Model = Model.extend({
        constructor(){
            Model.prototype.constructor.apply(this, arguments)
            
            this.on('creating', this.validateCreate, this)
            this.on('updating', this.validateUpdate, this)
        },
        validate(schema, model){
            let input = model && Object.keys(model).length > 0 ? model : this.changed

            var result = Joi.validate(input, schema, { abortEarly: false })

            if (result.error) throw result.error
            this.set(result.value)
        },
        validateCreate(){},
        validateUpdate(){},
        parse: (attrs) => _.mapKeys(attrs, (val, key) => _.camelCase(key)),
        format: (attrs) => _.mapKeys(attrs, (val, key) => _.snakeCase(key))
    })
}