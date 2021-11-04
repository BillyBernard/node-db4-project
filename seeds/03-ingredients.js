exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([   
      { ingredient_name: 'flour' },
      { ingredient_name: 'water' },

    ]);
  };