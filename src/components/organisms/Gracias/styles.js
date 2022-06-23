import styled from 'styled-components'
import {space,layout} from 'styled-system'
export const ImgSofa= styled.img`
  margin-top: 106px;
  ${layout}
  @media (max-width: 40em) {
    width: 100%;
    margin-top: 0px;
    margin-bottom: 48px;
  }
`


export const WrapperTextGracias= styled.div`
  margin-top: 106px;
  max-width: 480px;
  @media (max-width: 40em) {
    max-width: 100%;
    
    margin:0px 32px;
  }

`
export const Button=styled.button`

    background: #EF3340;
    border-radius: 8px;
    width: 255px;
    color: white;
    //height: 48px;
    font-size: 14px;
    height: 56px;
    text-decoration: none;
    font-family: "Lato",Arial,sans-serif;
    border-radius: 8px;
    display: inline-block;
    letter-spacing: 1px;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    border: none;
    cursor: pointer;
    transition: all .3s ease-in-out;
    min-width: 140px;
    outline: 0;
    box-shadow: none;  
    ${space}  
    @media (max-width: 40em) {
    width: 100%;
   
  }

    `