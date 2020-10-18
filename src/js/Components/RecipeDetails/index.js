import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import * as palette from '../../../variables'
import H2 from '../atoms/H2'
import Rating from '../atoms/Rating'
import { Clock } from '../../../images'
import RecipeRating from './RecipeRating'

const Wrap = styled.div`
  height: calc(100vh - 100px);
`

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  background-image: url(${require('../../../images/ackee.webp')});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
`

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.4);
`

const RecipeName = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 2;
  color: #fff;
  font-weight: 700;
`

const InfoWrap = styled.div`
`

const RatingAndDuration = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 45px;
  background: ${palette.purple};
`

const Duration = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px 0 0;
  color: #fff;
`

const SvgWrap = styled.svg`
  width: 14px;
  height: 14px;
  margin: 0 5px 0 0;
`

const RatingWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 0 20px;
`
const RateRecipe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background: ${palette.blue}
`

const RecipeOverview = styled.div`
  padding: 20px;
`

const RecipeRatingText = styled.div`
  color: #fff;
  padding: 10px 0 0 0;
  font-weight: 700;
`

const RecipeDetails = ({ recipes }) => {
  const { recipeId } = useParams()
  return (
    <React.Fragment>
      {recipes && recipes.filter(recipe => recipe.id === recipeId).map(recipe =>
        <React.Fragment key={recipe.id}>
          <Wrap>
            <ImageWrap>
              <ImageOverlay />
              <RecipeName>{recipe.name}</RecipeName>
            </ImageWrap>
            <InfoWrap>
              <RatingAndDuration>
                <RatingWrap>
                  <Rating details score={recipe.score} />
                </RatingWrap>
                <Duration>
                  <SvgWrap><Clock /></SvgWrap>{recipe.duration} min
                </Duration>
              </RatingAndDuration>
              <RecipeOverview>
                <H2>Ingredience</H2>
                <H2>Privada jidla</H2>
              </RecipeOverview>
            </InfoWrap>
          </Wrap>
          <RateRecipe>
            <RecipeRatingText>Ohodnoť tento recept</RecipeRatingText>
            <RecipeRating recipeId={recipe.id} />
          </RateRecipe>
        </React.Fragment>,
      )}
    </React.Fragment>
  )
}

export default RecipeDetails
