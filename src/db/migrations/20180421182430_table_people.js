exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.withSchema('family').hasTable('people')
            .then((exists) => {
                if(!exists){
                    return knex.schema.withSchema('family').createTable('people', table => {
                        table
                            .uuid('id')
                            .notNullable()

                        table
                            .string('name', 200)
                            .notNullable()

                        table
                            .integer('age')
                            .notNullable()

                        table
                            .uuid('home_id')
                            .notNullable()

                        table.primary('id')
                    })
                }
            })
    ])
};

exports.down = knex => knex.schema.withSchema('family').dropTableIfExists('people')