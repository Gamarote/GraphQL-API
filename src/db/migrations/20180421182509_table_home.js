exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.withSchema('family').hasTable('home')
            .then((exists) => {
                if(!exists){
                    return knex.schema.withSchema('family').createTable('home', table => {
                        table
                            .uuid('id')
                            .notNullable()

                        table
                            .string('address', 200)
                            .notNullable()

                        table
                            .string('city', 200)
                            .notNullable()

                        table
                            .string('state', 200)
                            .notNullable()

                        table
                            .string('country', 200)
                            .notNullable()

                        table.primary('id')
                    })
                }
            })
    ])
};

exports.down = knex => knex.schema.withSchema('family').dropTableIfExists('home')