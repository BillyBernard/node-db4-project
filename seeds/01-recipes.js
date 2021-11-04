exports.seed = function(knex, Promise) {
    return knex('recipes').insert([   
      { recipe_name: 'cake'},
      { recipe_name: 'cupcake'},
    ]);
  };
  