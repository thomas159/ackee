import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import * as allActions from './actions'
import H2 from '../atoms/H2'
import * as palette from '../../../variables'

const Wrap = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
`

const Input = styled.input`
  border:none;
  border-bottom: 1px solid #1890ff;
  outline: none;
  margin: 10px 0;
  padding: 5px 0;
`

const FormGroup = styled.div`
  display: flex;
  width: 100%:
  justify-content: center;
`

const AddIngredientBtn = styled.button`
  margin: 0;
  outline: 0;
  border: 1px solid ${palette.purple};
  border-radius: 10px;
  color: ${palette.purple};
  padding: 5px;
  background: #fff;
`

const AddRecipe = () => {
  const [ ingredientsNumber, setIngredientsNumber ] = useState(2)
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    dispatch(allActions.addRecipe(data))
  }
  return (
    <Wrap>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Input
            type="text"
            name="nazev receptu"
            placeholder="Název receptu"
            ref={register({ required: true, maxLength: 80 })}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="uvodni text"
            placeholder="Úvodni text"
            ref={register({ required: true, maxLength: 100 })}
          />
        </FormGroup>
        <H2>Ingredience</H2>

        {Array(ingredientsNumber).fill().map((index) =>
          <FormGroup key={index}>
            <Input
              type="text"
              name="vase ingredience"
              placeholder="Vaše ingredience"
              ref={register({ required: true, maxLength: 100 })}
            />
          </FormGroup>,
        )}

        <AddIngredientBtn
          onClick={() => setIngredientsNumber(ingredientsNumber + 1)}
        >
          + Přidat
        </AddIngredientBtn>

        <FormGroup>
          <Input
            type="text"
            name="postup"
            placeholder="Postup"
            ref={register({ required: true, maxLength: 100 })}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="cas"
            placeholder="Čas"
            ref={register({ required: true, maxLength: 100 })}
          />
        </FormGroup>
        <Input type="submit" />
      </form>

    </Wrap>
  )
}

export default AddRecipe
