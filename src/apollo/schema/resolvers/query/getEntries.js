import entries from 'data/entries'

const filters = {
  ALL: () => true,
  TRENDING: ({ isTrending }) => isTrending,
  OPEN: ({ status }) => status === 1,
  COMPLETED: ({ status }) => status === 0 
}

const getDate = ({ date }) => new Date(date).getTime()

const sorters = {
  DATE: (a, b) => getDate(b) - getDate(a),
  POPULARITY: (a, b) => b.popularity - a.popularity,
}

export default (_, { first, offset = 0, filter = 'ALL', sort = 'DATE' }) => (
  entries
    .filter(filters[filter])
    .slice(offset, first === undefined ? undefined : offset + first)
    .sort(sorters[sort])
)