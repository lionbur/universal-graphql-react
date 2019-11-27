import styled from 'styled-components'

export const Footer = styled.div`
  background-color: #eee;
  display: flex;
  color: #aaa;
  padding: 0;
  line-height: 50px;
`
export const FooterCell = styled.div`
  padding: 0 15px;
  flex: ${(({ fullWidth }) => fullWidth ? '1 1' : '0 0')} auto;
`

export default function EntryFooter({ data: { numComments } }) {
  return (
    <Footer>
      <FooterCell>Comments ({numComments})</FooterCell>
      <FooterCell fullWidth>Share</FooterCell>
      <FooterCell>. . .</FooterCell>
    </Footer>
  )
}