import NextLink from 'next/link'
import { useRouter } from 'next/router'

export default function Link ({ children, ...props }) {
  const { pathname } = useRouter()
  const child = React.Children.only(children)
  const active = pathname === props.href
  const href = active ? undefined : props.href

  return (
    <NextLink {...props}>
      {React.cloneElement(child, { active, href })}
    </NextLink>
  )
}