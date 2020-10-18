import React from 'react'
import styled from 'styled-components'
import { useParams, useLocation, useHistory, Link } from 'react-router-dom'
import { BackArrow } from '../../../images'

import * as palette from '../../../variables'

const Wrap = styled.div`
  position: ${(props) => (props.location === '/' || props.location === '/addRecipe' ? 'relative' : 'absolute')};
  display: grid;
  height: 40px;
  width: 100%;
  grid-template-columns: 40px 1fr 100px;
  z-index: 999;
  box-shadow: ${(props) => (props.location === '/' || props.location === '/addRecipe' ? '0px 3px 5px 1px rgba(0,0,0,0.04)' : 'none')};
`

const PlusBtn = styled.button`
  display: flex;
  width: 40px;
  height: 40px;
  font-size: 40px;
  justify-items: center;
  align-items: center;
`

const Name = styled.div`
  display: flex;
  justify-items: flex-start;
  align-items: center;
  width: 100%;
  font-weight: 700;
  font-size: 16px;
`

const Back = styled.div`
  padding: 10px;
`

const BackBtn = styled.button`
  width: 30px;
  height: 20px;
  cursor: pointer;
  outline: 0;
  margin: 0;
  border: 0;
  background: inherit;
  color: ${(props) => (props.location === '/addRecipe' ? `${palette.blue}` : '#fff')};
`

const AddRecipeBtn = styled.button`
  margin: 0;
  outline: 0;
  border: 0;
  background: inherit;
  font-size: 30px;
  color: ${(props) => (props.location === '/' || props.location === '/addRecipe' ? `${palette.blue}` : '#fff')};
`

const AddRecipe = styled.div`
  display: flex;
  padding: 0 20px 0 0;
  justify-content: flex-end;
  align-items: center;
`

const NavBar = ({ recipeName }) => {
  const history = useHistory()
  const location = useLocation()
  const { id } = useParams()
  return (
    <Wrap location={location.pathname}>
      <Back>
        {location.pathname !== '/'
          && <BackBtn
            type="button"
            onClick={() => history.goBack()}
            location={location.pathname}
          >
            <BackArrow />
             </BackBtn>}
      </Back>

      <Name>
        {location.pathname === '/' && 'Recepty'}
        {location.pathname === '/addRecipe' && 'Přidat recept'}
      </Name>
      <AddRecipe>
        <Link to="/addRecipe">
          <AddRecipeBtn location={location.pathname}>
            +
          </AddRecipeBtn>
        </Link>
      </AddRecipe>

    </Wrap>
  )
}

export default NavBar
