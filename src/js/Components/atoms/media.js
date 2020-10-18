import { styled, css } from 'styled-components'

const sizes = {
  xxl: 2000,
  xl: 1400,
  lg: 1180,
  md: 1020,
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export default media
