import styled from 'styled-components'
import {space,layout} from 'styled-system'
export const Wrapper= styled.div`
    display: flex; 
    margin-top:32px;
    justify-content: space-between;
  
`
export const Wrappertext= styled.div`
    display: flex; 
    justify-content: space-around;
    margin-top:32px;
`
export const PlussMin= styled.div`
    display: flex; 
    cursor: pointer;
    ${layout}
   
   
`
export const Img= styled.img`
${space}
`

export const PlusMinContainer= styled.div`
display: flex;
flex-direction: column;
`
export const ImgContainer= styled.img`
${layout}

`

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const Switch = styled.div`
  position: relative;
  width: 51px;
  height: 31px;
  background: #E4E8F7;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: #7CC954;

    &:before {
      transform: translate(21px, -50%);
    }
  }
`;
export const InputWrapper = styled.div`
    ${layout}
`;
export const VerMasWrapper = styled.div`
  display: flex;
  width: 279px;
    margin-right:auto;
    margin-left: auto;
    ${layout}
  
`

