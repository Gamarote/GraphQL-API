exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
   return knex('family.home').del()
    .then(() => {
      return knex('family.home').insert([{
          id: 'a868a33c-d8d3-4b09-a896-4d83617301c5',
          address: 'Rua X, 123',
          city: 'Sao Paulo',
          state: 'SP',
          country: 'Brazil'
        }
      ]);
    })
    .then(() => {
      return knex('family.people').del()
    })
    .then(() => {
      // Inserts seed entries
      return knex('family.people').insert([{
          id: 'd41c0a1e-c7de-4dda-916d-898f5a145688',
          name: 'Gabriel',
          age: 19,
          home_id: 'a868a33c-d8d3-4b09-a896-4d83617301c5'
        },
        {
          id: '8d01cbc8-d6c7-4934-aec0-fb56a925bd11',
          name: 'Carlos',
          age: 50,
          home_id: 'a868a33c-d8d3-4b09-a896-4d83617301c5'
        }
      ]);
    })
    .then(() => {
      return knex('family.people_relations').del()
    })
    .then(() => {
      return knex('family.people_relations').insert([
        {
          person_1: '8d01cbc8-d6c7-4934-aec0-fb56a925bd11',
          person_2: 'd41c0a1e-c7de-4dda-916d-898f5a145688',
          relation: 'FATHER_SON'
        }
      ])
    })
};