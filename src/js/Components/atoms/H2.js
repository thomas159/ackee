import styled from 'styled-components'
import React from 'react'
import * as palette from '../../../variables'

const StyledH2 = styled.h2`
  position: relative;
  font-size: 16px;
  margin: 0 0 5px 0;
  color: ${palette.blue};
`
const H2 = ({ children }) => (
  <StyledH2>{children}</StyledH2>
)

export default H2
