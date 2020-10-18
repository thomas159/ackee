import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import Routing from '../../routes'
import * as allActions from './actions'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
html,
body {
    position: relative;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 1.2;
    word-break: normal;
    color: #000;
    a:link {
      color: inherit;
    }
    a:visited {
      color: inherit;
    }
    a:hover {
      color: inherit;
    }
    a:active {
      color: inherit;
    }
}
`

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allActions.fetchRecipes())
  }, [])

  const { recipes } = useSelector(
    (state) => ({
      recipes: state.recipes.items,
    }),
  )

  return (
    <>
      <GlobalStyle />
      <Routing recipes={recipes} />
    </>
  )
}
export default App
