import styled from "styled-components"

const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    list-style: none;
`

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
`

const CheckMark = styled.span`
  margin-right: 10px;
  color: #000;
`

export { CheckMark, List, ListItem }