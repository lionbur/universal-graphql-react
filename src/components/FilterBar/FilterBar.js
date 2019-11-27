import { Bar, Button } from './styled'
import Link from 'src/components/Link'

const FilterLink = ({ href, children, ...props }) => (
  <Link {...{ href }} {...props}>
    <Button {...{href}}>{children}</Button>
  </Link>
)

export default function FilterBar() {
  return (
    <Bar>
      <label>Filter by:</label>
      <FilterLink href="/">
        All
      </FilterLink>
      <FilterLink href="/trending">
        Trending
      </FilterLink>
      <FilterLink href="/open">
        Open Tasks
      </FilterLink>
      <FilterLink href="/completed">
        Completed Tasks
      </FilterLink>
    </Bar>
  )
}