import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to { 
    transform: translateX(-100%);
  }
`
const DynamicDashboard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;

    ul{
        flex-direction: row;
        padding-right: 10px;
        animation: ${slideIn} 20s linear infinite;
    }

    small{
        text-align: center;
    }

    @media (min-width: 768px) {
        ul{
            flex-wrap: wrap;
            animation: none;
        }
        
        li {
                animation-delay: 0s;
        }
    }
`
export { DynamicDashboard, slideIn }