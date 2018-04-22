exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.withSchema('family').hasTable('people').then((exists) => {
            if(exists){
                return knex.schema.withSchema('family').table('people', table => {
                    table
                        .foreign('home_id')
                        .references('id')
                        .inTable('family.home')
                })
            }
        })
    ])
}

exports.down = knex => knex.schema.withSchema('family').dropTableIfExists('people')