import styled from 'styled-components'

export const Root = styled.div`
  padding-top: 10px;
`

export const Title = styled.div`
font-weight: bold;
font-size: 150%;
color: #444;
margin-bottom: 10px;
`

export const Description = styled.div`
  color: #888;
  margin-bottom: 20px;
`

export const Thumbnail = styled.img`
  width: 250px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
`

export const Inner = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin: 0 30px;
  box-shadow: 0 0 1px 2px rgba(0,0,0,.1);
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
`

export const InnerMiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
`

export const Total = styled.div`
  color: #0ce;
  font-size: 150%;
`

export const SubText = styled.div`
  color: #aaa;
  font-size: 75%;
`

export const PledgerCount = styled.div`
  margin-top: 10px;
  color: #666;
  font-size: 150%;
`

export const PledgeButton = styled.button`
  border: 1px solid #0ce;
  border-radius: 10px;
  line-height: 20px;
  color: #0ce;
  padding: 0 20px;
  outline: none;
`

export const InnerBody = styled.div`
  display: flex;
  flex-direction: row;
`

export const InnerFooter = styled(Inner)`
  background-color: #eee;
  display: flex;
  color: #aaa;
  padding: 0;
  line-height: 50px;
`

export const InnerFooterCell = styled.div`
  padding: 0 15px;
  flex: ${(({ fullWidth }) => fullWidth ? '1 1' : '0 0')} auto;
`

export const InnerFooterButton = styled.div`
  background-color: #0ce;
  color: #fff;
  padding: 0 30px;
`

export default function Body({ data: {
  title, description, thumbnail,
  pledgeTotal, pledgeGoal, pledgerCount,
  numComments,
} }) {
  return (
    <Root>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Inner>
        <Thumbnail
          src={thumbnail}
          alt={title}
        />
        <InnerMiddle>
          <Total>${pledgeTotal}</Total>
          <SubText>pledged of ${pledgeGoal} goal</SubText>
          <PledgerCount>{pledgerCount}</PledgerCount>
          <SubText>pledgers</SubText>
        </InnerMiddle>
        <PledgeButton>Pledge</PledgeButton>
      </Inner>
      <InnerFooter>
        <InnerFooterCell>View Source</InnerFooterCell>
        <InnerFooterCell fullWidth>{'</>'} Code submissions ({0})</InnerFooterCell>
        <InnerFooterButton>Claim ${pledgeTotal}</InnerFooterButton>
      </InnerFooter>
    </Root>
  )
}