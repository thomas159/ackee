import {
  FETCH_RECIPES_REQUEST, FETCH_RECIPES_SUCCESS, FETCH_RECIPES_FAILURE,
} from '../../Constants'

export const fetchRecipes = () => async (dispatch) => {
  dispatch({ type: FETCH_RECIPES_REQUEST })
  const proxyurl = 'https://cors-anywhere.herokuapp.com/'
  const url = 'http://cookbook.ack.ee/api/v1/recipes'
  try {
    const data = await (await fetch(proxyurl + url)).json()
    dispatch({ type: FETCH_RECIPES_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: FETCH_RECIPES_FAILURE, payload: error })
  }
}
