const router = require('express').Router();
const Recipes = require('./model')

router.get('/:id', (req, res) => {
    const recipeId = req.params.id;
    Recipes.getRecipeById(recipeId)
        .then(selectedRecipe => {
            res.json(selectedRecipe);
        })
        .catch(() => {
            res.status(404).json({message: 'could not find recipe'})
        })
})

module.exports = router;