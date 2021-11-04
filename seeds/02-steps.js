exports.seed = function(knex, Promise) {
    return knex('steps').insert([   
      { step_number: '1', step_instruction: "bake", recipe_id: '1' },
      { step_number: '2', step_instruction: "eat", recipe_id: '2' },
    ]);
  };