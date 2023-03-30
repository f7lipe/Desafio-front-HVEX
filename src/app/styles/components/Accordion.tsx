import styled from "styled-components"

interface AccordionBodyProps {
    isExpanded: boolean;
}

const AccordionBody = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #f7f7f7;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  width: 100%;
  min-height: 100px;

  transition: max-height 0.3s ease-in;
  max-height: ${({ isExpanded } : AccordionBodyProps) => (isExpanded ? '400px' : '0')};

  margin: 10px 0;
  padding: 20px;

  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

const AccordionHeader = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  background-color: #f7f7f7;
  color: #333;
  height: 70px;
  text-align: left;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  color: ${(props) => props.theme.colors.quaternary};
  font-weight: 700;
  
  &:hover {
    background-color: #eee;
  }
`;

const AccordionContent = styled.p`
    padding: 10px 0;
    font-weight: 300;
    color: #333;
`;

export { AccordionBody, AccordionHeader, AccordionContent }