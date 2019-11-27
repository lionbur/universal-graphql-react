import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import { useEntries } from 'src/services/entries'
import Entry from '../components/Entry'

export default function EntryList({ filter }) {
  const { data, getMore, hasMore } = useEntries({ filter })

  if (!data) {
    return null
  }

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={getMore}
      {...{ hasMore }}
      loader={<h4>Loading...</h4>}
      endMessage={<div>No more data</div>}
    >
      {data
        .map(entry => (
          <Entry key={JSON.stringify(entry)} data={entry}/>
        ))
      }
    </InfiniteScroll>
  )
}