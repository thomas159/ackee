import { RATE_RECIPE } from '../../../Constants'

export const rateRecipe = (recipeId, rating) => ({
  type: RATE_RECIPE,
  ratingInfo: { recipeId, rating },
})
