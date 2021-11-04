const db = require('../data/db-config')

async function getRecipeById(recipe_id) {
    const rows = await db('recipes as r')
        .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
        .leftJoin('steps_ingredients as si', 's.step_id', 'si.step_id')
        .leftJoin('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
        .where('r.recipe_id', recipe_id)

    const result = {
        recipe_id: rows[0].recipe_id,
        recipe_name: rows[0].recipe_name,
        created_at: rows[0].created_at,
        steps: [],
    }

    rows.map((row) => {
        if (row.recipe_id) {
            result.steps.push({
                step_id: row.step_id,
                step_number: row.step_number,
                step_instructions: row.step_instructions,
                ingredients: {
                    ingredient_id: row.ingredient_id,
                    ingredient_name: row.ingredient_name,
                    quantity: row.quantity,
                }
            })
        }
    });

    return result
}

module.exports = {
    getRecipeById,
}