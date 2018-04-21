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
                                'Married',
                                'Father-Son',
                                'Mother-Son',
                                'Father-Daughter',
                                'Mother-Daughter',
                                'Brother-Sister',
                                'Brothers',
                                'Sisters'
                            ])
                            .notNullable()

                        table
                            .foreign('person_1')
                            .references('id')
                            .inTable('people')

                        table
                            .foreign('person_2')
                            .references('id')
                            .inTable('people')

                        table.primary(['person_1', 'person_2'])
                    })
                }
            })
    ])
};

exports.down = knex => knex.schema.withSchema('family').dropTableIfExists('people_relations')