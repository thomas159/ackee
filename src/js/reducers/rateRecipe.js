import {
  RATE_RECIPE,
} from '../Constants'

const rateRecipe = (state = [], action) => {
  switch (action.type) {
    case RATE_RECIPE:
      return [ ...state, action.ratingInfo]
    default:
      return state
  }
}

export default rateRecipe
