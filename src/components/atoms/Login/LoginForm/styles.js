import styled from 'styled-components'
import { layout } from 'styled-system'

export const InputField= styled.div`
     width: 100%;
    display:flex;
    height:56px;`
    export const LabelBg= styled.label`
    display: inline-block;
    cursor: pointer;
    font-family: "Roboto",sans-serif;
    font-weight: 300;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #676f8f;
    &:before {
    background-color: #92d66f;
    border-color: #92d66f;
    color: #fff;
    font-size: 8px;
    text-align: center;
    background-size: 70%;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url('images/check.svg');
    content: "";
    border: 1px solid #d4d5e8;
    border-radius: 5px;
    margin-right: 10px;
    vertical-align: bottom;
    width: 18px;
    height: 18px;
    display: inline-block;
    }
   `
export const FalsoCheck= styled.div`

    display: flex;
    align-items: flex-start ;`
export const ContainerCheckbox= styled.div`

   display:flex;
   flex-direction: column;
   margin-bottom:40px;
  `
    
export const InputContainer= styled.div`
 
margin-bottom:16px;`

export const InputLabel= styled.div`
     position: relative;
    margin-top: 0px;
    width: 100%;
    `
    

export const H1= styled.h1` 
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 36px;
margin-bottom: 24px;
/* identical to box height, or 129% */

letter-spacing: -0.2px;

/* Gray_1_Títulos */

color: #494F66;
`
export const InputCheckbox=styled.input`
display:none`

export const Input=styled.input`
    color: #494f66;
    border: solid 1px #d4d5e8;
    width: 100%;
    height: 56px;
    padding-left: 16px;
    padding-top: 16px;
    padding-right: 16px;
    border-radius: 4px;
    outline: none;
    font-size: 16px;
    box-shadow: none;
    box-sizing: border-box;
    transition: box-shadow 0.3s, border 0.3s;
    -webkit-box-shadow: 0 0 0px 1000px #ffffff inset;
    -webkit-text-fill-color: #494f66;
    -webkit-appearance: none;
    appearance: none;
    text-transform: capitalize;`
export const InputDoc=styled.input`
    color: #494f66;
    border: solid 1px #d4d5e8;
    width: 100%;
    height: 56px;
    padding-left: 16px;
    padding-top: 16px;
    padding-right: 16px;
    border-radius: 4px;
    outline: none;
    font-size: 16px;
    box-shadow: none;
    box-sizing: border-box;
    transition: box-shadow 0.3s, border 0.3s;
    -webkit-box-shadow: 0 0 0px 1000px #ffffff inset;
    -webkit-text-fill-color: #494f66;
    -webkit-appearance: none;
    appearance: none;
    text-transform: capitalize;
`

export const Select=styled.select`
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* or 150% */

display: flex;
align-items: center;
letter-spacing: 0.2px;
transition: all 0.3s;
    padding: 0 16px;
    border-radius: 4px 0 0 4px;
    border-right: none;
    outline: none;
    color: #494F66;
    width: 90px;
/* Gray_1_Títulos */

background: #FFFFFF;
/* Gray_4 */

border: 1.00694px solid #C5CBE0;
border-radius: 4.02778px;`


export const Ppolitic=styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 12px;
line-height: 20px;
/* or 167% */

letter-spacing: 0.2px;
margin: 0;

color: #676F8F;`
export const Apolitic=styled.a`
font-weight: normal;
 text-decoration: underline;
 cursor: pointer;
    color: #676f8f;
`
export const Label=styled.label`
color: #a3abcc;
    position: absolute;
    bottom: 32%;
    left: 16px;
    display: block;
    margin: 0 auto;
    font-size: 16px;
    cursor: text;
    transition: transform 0.2s ease-out, color 0.2s ease-out, -webkit-transform 0.2s ease-out;
    -webkit-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
    text-align: initial;

`

export const Button=styled.button`
background: #EF3340;
border-radius: 8px;
    color: white;
    font-size: 14px;
    line-height: 24px;
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
    padding: 20px 32px;
    transition: all .3s ease-in-out;
    min-width: 140px;
    outline: 0;
    box-shadow: none;    
   
    @media screen and (max-width: 40em) {
        width: 100%;    
     }   

    `
export const Error=styled.span`
color: #ff757a;
    font-size: 13px;
    display: block;
    margin-top: 8px;
    margin-bottom: 10px;
    text-align: left;
    position: relative;`
    
