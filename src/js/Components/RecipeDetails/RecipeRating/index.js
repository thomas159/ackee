import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Star } from '../../../../images'
import * as palette from '../../../../variables'
import * as allActions from './actions'

const Wrap = styled.div`
  position: relative;
  width: 100%:
  height: 100%;
  padding: 10px;
`
const SvgWrap = styled.svg`
  width: 30px;
  height: 30px;
  color: ${(props) => (props.active ? '#fff' : 'rgba(0,0,0,0.2)')};
`

const Overlay = styled.div`
  position: absolute;
  height: ${(props) => (props.details ? '20px' : '10px')};
  width: ${(props) => props.percent}%;
  background: ${(props) => (props.details ? `${palette.purple}` : '#fff')};
  top: 0; 
  right: 0;
`

const RecipeRating = ({ recipeId }) => {
  const dispatch = useDispatch()
  const { rateRecipe } = useSelector(
    (state) => ({
      rateRecipe: state.rateRecipe,
    }),
  )

  const filterRecipes = rateRecipe.filter(recepId => recipeId === recepId.recipeId)
  const dispatchRating = (id, rating) =>
    filterRecipes.length === 1 ? '' : dispatch(allActions.rateRecipe(id, rating))

  return (
    <Wrap>
      <Overlay />
      {[ ...Array(5).keys() ].map(i =>
        <SvgWrap
          key={i}
          active={filterRecipes.length === 1 && filterRecipes[0].rating >= i + 1}
          onClick={() => dispatchRating(recipeId, i + 1)}
        >
          <Star />
        </SvgWrap>,
      )}
    </Wrap>
  )
}

export default RecipeRating
