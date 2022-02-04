import React from 'react'
import { StyledCards } from './Cards.styled'
import Card from './Card'

const Cards = ({statCards}) => {
  return (
    <StyledCards>
      {
        statCards.map((stat,index) => {
          return (
            <Card key={index} {...stat} />
          )
        })
      }
    </StyledCards>
  )
}

export default Cards
