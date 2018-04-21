exports.up = function(knex, Promise) {
    return knex.schema.createSchema('family')
};

exports.down = knex => knex.schema.dropSchema('family');
