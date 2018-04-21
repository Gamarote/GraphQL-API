exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.withSchema('family').hasTable('people_relations')
            .then((exists) => {
                if(!exists){
                    return knex.schema.withSchema('family').createTable('people_relations', table => {
                        table
                            .uuid('perSON_1')
                            .notNullable()

                        table
                            .uuid('perSON_2')
                            .notNullable()

                        table
                            .enu('relation', [
                                'MARRIED',
                                'FATHER_SON',
                                'MOTHER_SON',
                                'FATHER_DAUGHTER',
                                'MOTHER_DAUGHTER',
                                'BROTHER_SISTER',
                                'BROTHERS',
                                'SISTERS'
                            ])
                            .notNullable()

                        table
                            .foreign('perSON_1')
                            .references('id')
                            .inTable('people')

                        table
                            .foreign('perSON_2')
                            .references('id')
                            .inTable('people')

                        table.primary(['perSON_1', 'perSON_2'])
                    })
                }
            })
    ])
};

exports.down = knex => knex.schema.withSchema('family').dropTableIfExists('people_relations')