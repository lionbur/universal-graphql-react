import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { useState } from 'react'

const FEED_QUERY = gql`
  query Feed($first: Int, $offset: Int, $filter: Filter) {
    getEntries(first: $first, offset: $offset, filter: $filter) {
      author {
        name
        picture
        score
      }
      status
      isTrending
      title
      description
      thumbnail
      codeSubmissionTotal
      pledgeTotal
      pledgeGoal
      pledgerCount
      numComments
    }
  }
`

const sort = 'DATE'

export function useEntries({ filter }) {
  const { data, fetchMore } = useQuery(
    FEED_QUERY,
    {
      variables: { first: 5, offset: 0, filter, sort },
    }
  )
  const [hasMore, setHasMore] = useState(true)

  return {
    data: data && data.getEntries,
    hasMore,
    getMore() {
      fetchMore({
        variables: {
          first: 5,
          offset: data.getEntries.length,
          filter,
          sort,
        },
        updateQuery(prev, { fetchMoreResult }) {
          console.log('uypdateQuery', prev, fetchMoreResult)
          if (fetchMoreResult.getEntries.length === 0) {
            setHasMore(false)
            return prev
          }

          return {
            getEntries: [
              ...prev.getEntries,
              ...fetchMoreResult.getEntries,
            ],
          }
        }
      })
    }
  }
}

