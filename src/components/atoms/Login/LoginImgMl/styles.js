import styled from 'styled-components'
import {space,layout,typography } from 'styled-system'

export const Img= styled.img` 
margin-left: auto;
margin-right: auto;
display: block;
@media (max-width: 40em) {
    max-width: 112px;
    margin-left: 0;
margin-right: 0;
margin-top:24px;

  }
 `
export const Pexclamation= styled.p` 
font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 16px;
letter-spacing: 0.8px;
text-transform: uppercase;
margin: 0;

color: #494F66;
${space}
`
Pexclamation.defaultProps={
  marginTop:['40px','24px']
}
export const H1= styled.h1` 
font-family: 'Lato';
font-style: normal;
font-weight: 400;
line-height: 48px;
display:inline;
letter-spacing: -0.2px;
color: #494F66;
${layout}
${typography} 
@media (max-width: 40em) {
   font-size: 28px;
    line-height: 36px;  
    letter-spacing: -0.6px;
  }
`
H1.defaultProps={
  fontSize:' 36px',
}
export const H1Red= styled.b` 
font-family: 'Lato';
font-style: normal;
font-weight: 400;
line-height: 48px;
display: inline;
margin-left: auto;
margin-right: auto;
@media (max-width: 40em) {
    font-size: 28px;
    line-height: 36px;  
    letter-spacing: -0.6px;
  }
/* or 133% */

letter-spacing: -0.2px;

/* Gray_1_Títulos */

color: red;
`
H1Red.defaultProps={
  fontSize:' 36px',
}
export const PText= styled.p` 
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 0.2px;
/* or 171% */

display: flex;
align-items: center;

/* Gray_2_Paragraph */

color: #676F8F;
@media (max-width: 40em) { 
        margin-top:12px;  
     }
`
export const Copyright=styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 12px;
line-height: 20px;
/* identical to box height, or 167% */

letter-spacing: 0.2px;

/* Gray_3 */

color: #A3ABCC;

`
export const CopyrightDiv=styled.div`
margin-top: 99px;

`