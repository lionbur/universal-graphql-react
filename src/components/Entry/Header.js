import styled from 'styled-components'

const Root = styled.div`
  display: flex;
  flex-direction: row;
`

const NameAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`

const Name = styled.div`
  font-weight: bold;
  font-size: 150%;
  color: #444;
`

const Title = styled.div`
  color: #aaa;
`

const Picture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`

const Badge = styled.div`
  margin: 0 5px;
  padding: 0 20px;
  line-height: 20px;
  border-radius: 10px;
  color: #eee;
  background-color: ${({ backgroundColor }) => backgroundColor};
  align-self: center;
`

const Trending = () => (
  <Badge backgroundColor='#e48'>
    Trending
  </Badge>
)

const TaskCompleted = () => (
  <Badge backgroundColor='#4e8'>
    Task Completed
  </Badge>
)

export default function Header({ data: {
  author: { name, title = 'CEO', picture, score },
  isTrending, status,
} }) {
  return (
    <Root>
      <Picture
        src={picture}
        alt={name}
      />
      <NameAndTitle>
        <Name>{name}</Name>
        <Title>{title}</Title>
      </NameAndTitle>
      {isTrending && <Trending/>}
      {status === 0 && <TaskCompleted/>}
    </Root>
  )
}