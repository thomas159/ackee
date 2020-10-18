import {
  FETCH_RECIPES_REQUEST, FETCH_RECIPES_SUCCESS, FETCH_RECIPES_FAILURE,
} from '../Constants'

const recipes = (state = '', action) => {
  switch (action.type) {
    case FETCH_RECIPES_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      }
    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.payload,
      }
    case FETCH_RECIPES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
        items: [],
      }
    default:
      return state
  }
}

export default recipes
