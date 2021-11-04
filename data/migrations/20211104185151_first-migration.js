
exports.up = function (knex) {
    return knex.schema
      .createTable("recipes", (tbl) => {
        tbl.increments("recipe_id");
        tbl.string("recipe_name", 128).notNullable();
        tbl.timestamp("created_on", true).unique();
      })
      .createTable("ingredients", (tbl) => {
        tbl.increments("ingredients_id");
        tbl.string("ingredient_name", 128).notNullable();
      })
      .createTable("steps", (tbl) => {
        tbl.increments("steps_id");
        tbl.integer("step_number");
        tbl.string("step_instructions", 128);
        tbl
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("recipe_id")
          .inTable("recipes")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      })
      .createTable('step_ingredients', (tbl) => {
          tbl.increments('quantity_id')
          tbl.decimal('quantity')
          tbl
            .integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('steps')
            .onDelete('restrict')
            .onUpdate('restrict')
          tbl
            .integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredients_id')
            .inTable('ingredients')
            .onDelete('restrict')
            .onUpdate('restrict')
      })
  };
  
  exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists("step ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
  };
