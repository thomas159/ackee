import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Img from '../atoms/Img'
import H2 from '../atoms/H2'
import { Clock } from '../../../images'
import Rating from '../atoms/Rating'

const Wrap = styled.div`
  display: grid;
  height: 40px;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  padding: 10px;
`

const CardWrap = styled(Link)`
  display: grid;
  width: 100%;
  grid-template-columns: auto 1fr;
  border-bottom: 1px solid #ddd;
  padding: 20px;
  text-decoration: none;
`

const Image = styled.div`
  width: auto;
  padding: 0 20px 0 0;
`

const Info = styled.div`
  height: 100%;
`

const RecipeName = styled.div`

`

const RatingWrap = styled.div`
  margin: 10px 0;
`

const Duration = styled.div`

`

const SvgWrap = styled.svg`
  width: 12px;
  height: 12px;
  margin: 0 5px 0 0;
`

const Recipes = ({ recipes }) => (
  <>
    <Wrap>
      {recipes && recipes.map((recipe) =>
        <CardWrap key={recipe.id} to={`/${recipe.id}`}>
          <Image>
            <Img height={126} width={126} src={require('../../../images/ackee.webp')} />
          </Image>
          <Info>
            <RecipeName>
              <H2>{recipe.name}</H2>
            </RecipeName>
            <RatingWrap>
              <Rating score={recipe.score} />
            </RatingWrap>
            <Duration>
              <SvgWrap><Clock /></SvgWrap>
              {recipe.duration} min
            </Duration>
          </Info>
        </CardWrap>,
      )}
    </Wrap>
  </>

)

export default Recipes
