import React from 'react'
import styled from 'styled-components'
import { Star } from '../../../images'
import * as palette from '../../../variables'

const SvgWrap = styled.svg`
  width: ${(props) => (props.details ? '20px' : '10px')};
  height: ${(props) => (props.details ? '20px' : '10px')};
  color: ${(props) => (props.details ? '#fff' : `${palette.purple}`)};
`

const Wrap = styled.div`
  position: relative;
  height: ${(props) => (props.details ? '20px' : '10px')};
  width: ${(props) => (props.details ? '100px' : '50px')};
`

const Overlay = styled.div`
  position: absolute;
  height: ${(props) => (props.details ? '20px' : '10px')};
  width: ${(props) => props.percent}%;
  background: ${(props) => (props.details ? `${palette.purple}` : '#fff')};
  top: 0; 
  right: 0;
`

const Rating = ({ details, score }) => {
  const scoreAsPercentage = score * 10 * 2
  const percentageToHide = 100 - scoreAsPercentage
  return (
    <Wrap details={details}>
      <Overlay
        details={details}
        percent={percentageToHide}
      />
      <SvgWrap details={details}>
        <Star />
      </SvgWrap>
      <SvgWrap details={details}>
        <Star />
      </SvgWrap>
      <SvgWrap details={details}>
        <Star />
      </SvgWrap>
      <SvgWrap details={details}>
        <Star />
      </SvgWrap>
      <SvgWrap details={details}>
        <Star />
      </SvgWrap>
    </Wrap>
  )
}

export default Rating
