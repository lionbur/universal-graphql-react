import React from 'react'

import ListItem from 'src/components/ListItem'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

export default function Entry({ data: {
  author, title, description, thumbnail,
  pledgeTotal, pledgeGoal, pledgerCount,
  numComments, isTrending, status
} }) {
  return (
    <ListItem>
      <ListItem.Body>
        <Header data={{ author, isTrending, status }}/>
        <Body data={{
          title, description, thumbnail,
          pledgeTotal, pledgeGoal, pledgerCount,
        }}/>
      </ListItem.Body>
      <Footer data={{ numComments }}/>
    </ListItem>
  )
}