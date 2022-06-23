import styled from 'styled-components'
import {color,layout} from 'styled-system'
export const StepWrap= styled.div`
display:flex;
position:relative;
align-items: initial;
margin-bottom: 40px;
&:before {
    height: 40px;
    left: 13px;
    top: 27px;
    content: "";
    display: block;
    position: absolute;
    z-index: 1;
    border-left: 1px dashed #E4E8F7;
}
`
export const StepWrapFinal= styled.div`
display:flex;
position:relative;
align-items: initial;
margin-bottom: 24px;
`
export const StepsContainer=styled.div`
width: 100%;
padding: 16px 0;
    ${layout}
`

export const Span= styled.span`  
   
    border: 1px solid ;
    margin-right: 16px;
    width:24px;
    max-width: 24px;
    height: 24px;
    max-height: 24px;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.2px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Lato', Arial, sans-serif;
    font-weight: bold;
    ${color}
`
Span.defaultProps={
    color: '#C5CBE0',
    bg:'#F7F8FC'
}
export const PText =styled.p`
     margin: 0;
    color: #494F66;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.2px;
    font-weight: normal;
    font-family: 'Lato', Arial, sans-serif;
`
export const WrapperMobile =styled.div`
display: flex;
margin: 0px 32px;

`
export const  WrapperPorcentaje =styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;

`
export const Porcentaje =styled.div`
width:100%;
height:7px;


background: #6769FF;
border-radius: 20px;
`