exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.withSchema('family').hasTable('people_relations')
            .then((exists) => {
                if(!exists){
                    return knex.schema.withSchema('family').createTable('people_relations', table => {
                        table
                            .uuid('id')
                            .notNullable()

                        table
                            .uuid('is_related')
                            .notNullable()

                        table
                            .uuid('of_person')
                            .notNullable()

                        table
                            .enu('relation', [
                                'HUSBAND',
                                'WIFE',
                                'MOTHER',
                                'FATHER',
                                'BROTHER',
                                'SISTER',
                                'SON',
                                'DAUGHTER'
                            ])
                            .notNullable()

                        table
                            .foreign('is_related')
                            .references('id')
                            .inTable('family.people')

                        table
                            .foreign('of_person')
                            .references('id')
                            .inTable('family.people')

                        table.primary('id')
                    })
                }
            })
    ])
};

exports.down = knex => knex.schema.withSchema('family').dropTableIfExists('people_relations')