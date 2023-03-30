import styled from "styled-components"

interface Props {
  isOpen?: boolean
}

const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 70px;
  transition: height 0.5s ease-in-out;
  
    ${(props: Props) => props.isOpen && `
    height: 90vh;
  `}

  @media screen and (min-width: 768px) {
    display: none;
  }
`

const MenuItem = styled.li`
  margin: 10px 0px;

  h5{
      margin: 0;
  }

  @media screen and (min-width: 768px) {
    margin: 0px 20px;
  }
`

const DesktopMenu = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export { MobileMenu, MenuItem, DesktopMenu }