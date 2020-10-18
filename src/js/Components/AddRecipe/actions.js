import { POST_RECIPES_REQUEST, POST_RECIPES_FAILURE, POST_RECIPES_SUCCESS } from '../../Constants'

const addRecipe = () => async (dispatch) => {
  dispatch({ type: POST_RECIPES_REQUEST })
  const proxyurl = 'https://cors-anywhere.herokuapp.com/'
  const url = 'http://cookbook.ack.ee/api/v1/recipes'
  try {
    const data = await (await fetch(proxyurl + url), {
      method: 'POST', // *GET, POST, P
    }).json()
    dispatch({ type: POST_RECIPES_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: POST_RECIPES_FAILURE, payload: error })
  }
}

export default addRecipe
