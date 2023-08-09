import React from 'react'
import * as C from "./CardsStyle.jsx"

const Cards = ({title, Icon, value}) => {
  return (
    <C.Card>
        <C.HeaderCard>
            <C.HeaderTitle>{title}</C.HeaderTitle>
            <Icon />
        </C.HeaderCard>
        <C.Total>{value}</C.Total>
    </C.Card>
  )
}

export default Cards