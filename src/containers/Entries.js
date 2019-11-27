import React, { Fragment } from 'react'
import FilterBar from 'src/components/FilterBar'
import { useRouter } from 'next/router'

import EntryList from './EntryList'

export default function Entries () {
  const { pathname } = useRouter()
  const filter = pathname.toUpperCase().replace(/\//g, '') || 'ALL'

  return (
    <Fragment>
      <FilterBar/>
      <EntryList {...{ filter }}/>
    </Fragment>
  )
}