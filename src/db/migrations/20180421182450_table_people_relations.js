exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.withSchema('family').hasTable('people_relations')
            .then((exists) => {
                if(!exists){
                    return knex.schema.withSchema('family').createTable('people_relations', table => {
                        table
                            .uuid('person_1')
                            .notNullable()

                        table
                            .uuid('person_2')
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
                            .foreign('person_1')
                            .references('id')
                            .inTable('family.people')

                        table
                            .foreign('person_2')
                            .references('id')
                            .inTable('family.people')

                        table.primary(['person_1', 'person_2'])
                    })
                }
            })
    ])
};

exports.down = knex => knex.schema.withSchema('family').dropTableIfExists('people_relations')