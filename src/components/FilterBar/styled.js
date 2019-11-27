import styled from 'styled-components'

export const Bar = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & a {
    margin: 1em;
  }
  & label {
    font-weight: bold;
  }
`

export const Button = styled.a`
  appearance: button;
  text-align: center;
  &:hover{
    text-decoration: ${({ active }) => active ? 'none' : 'underline'};
  }
  text-decoration: none;
  color: #eee;
  background-color: ${({ active }) => active ? '#888' : '#bbb' };
  min-width: 70px;
  line-height: 30px;
  padding: 0 20px;
  height: 30px;
  border-radius: 15px;
`