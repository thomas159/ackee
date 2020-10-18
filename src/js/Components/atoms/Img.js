import styled from 'styled-components'
import React, { useState } from 'react'

const StyledImg = styled.img`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`

const Img = ({ alt, height, src, width }) => (
  <StyledImg
    src={src}
    alt={alt}
    height={height}
    width={width}
  />
)

export default Img
