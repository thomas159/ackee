import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Recipes from '../Components/Recipes'
import RecipeDetails from '../Components/RecipeDetails'
import AddRecipe from '../Components/AddRecipe'
import NavBar from '../Components/atoms/Navbar'

const Routing = ({ recipes }) => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Recipes recipes={recipes} />
      </Route>
      <Route exact path="/addRecipe">
        <AddRecipe recipes={recipes} />
      </Route>
      <Route exact path="/:recipeId">
        <RecipeDetails recipes={recipes} />
      </Route>

    </Switch>
  </BrowserRouter>
)

export default Routing
