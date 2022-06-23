import styled from 'styled-components'
import { typography,color,space,layout,border } from 'styled-system'

export const Wrapper= styled.div`
    position: relative;
    z-index: 2;
    max-width:1184px;
    margin-left    :auto ;
    margin-right    :auto ;
    margin-top:116px;
    display: flex; 
    @media (max-width: 40em) {
        margin-top:108px;
        flex-direction: column;
  }
    
    
`
export const WrapperSteps= styled.div`
   width: 320px;
   @media (max-width: 40em) {
        width:100%
  }
    
`
export const WrapperText= styled.div`
  ${layout}
  ${space}
    
`
export const WrapperBody= styled.div`
   margin-left: 96px;
   max-width: 864px;  
   display: flex;  
   @media (max-width: 40em) {
    flex-direction: column;
    margin-left: 32px;
    margin-right: 32px;
        
  }
   
`
export const WrapperBodyImportant= styled.div`
   width: 384px;
   @media (max-width: 40em) {
        width: 100%;
        
  }
      
    
`
export const PReusable= styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;

${typography}
${color}
${space}
${layout}
`
PReusable.defaultProps={
    lineHeight:'28px',
    fontSize: '16px',
    color:' #676F8F',
    marginTop:'0px',
    marginRight:'0px',
    marginLeft:'0px',
    marginBottom:'0px'
   
}
export const BoxText= styled.div`
   margin-top: 40px;
   margin-left: 32px;
   max-width:192px;
   margin-right: 32px;
    
`
export const BoxBoyLic= styled.div`
    width: 384px;
    height: 172px;
    border-radius :12px;
    background: #FFFFFF;
    border: 3px solid #F0F2FA;
    margin-top  :44px ;
    display: flex;
    justify-content: space-between;
    @media (max-width: 40em) {
        width: 100%;
        height: 148px;
        
  }
    
  
`
export const BoxSum= styled.div`
   margin-top: 64px;  
   width:384px;
   margin-right: 32px;
   display:flex;
   justify-content: space-between;
   @media (max-width: 40em) {
       width:100%;
       flex-direction: column;
        
  }
`
export const BoxSumText= styled.div`
     
`
export const BoxSumButtom= styled.div`
width: 160px;
height: 56px;
border: 1px solid #C5CBE0;
border-radius: 8px;
display: flex;
@media (max-width: 40em) {
       width:100%;

  }


`
export const BoxSumTextMinMax= styled.div`
    display: flex;
    justify-content: space-between;
      
`
export const BoxSumButtomWrapper= styled.div`
width: 160px;
height: 56px;
border: 1px solid #C5CBE0;
border-radius: 8px;
display: flex;
display: flex;
align-content: center;
   
flex-wrap: wrap;
justify-content: space-around;
@media (max-width: 40em) {
       width:100%;

  }


`
export const BoxSumButtomTrue= styled.div`
background-color: white;
border: none;
display: flex;
align-content: center;   
flex-wrap: wrap;
cursor: pointer;

`
export const Line= styled.div`
 

 ${space}
 ${layout}
 ${border}
 `
 Line.defaultProps={
  borderBottom:'solid 1px #E4E8F7'
 }
 export const H2Reusable= styled.h2`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #494F66;
    ${space}      
 `
  export const NavCoberture= styled.div` 
  display: flex;
  width: 100%;
    /* flex-direction: row; */
    justify-content: center;
      
`
export const H3Reusable= styled.h3`
font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 10px;
line-height: 16px;
letter-spacing: 0.8px;

text-transform: uppercase;
${space}
${color}      
`
export const WrapperH3= styled.div`
width: 128px;
height: 32px;
display: flex;
align-items: center;
text-align: center;
margin-top: 64px;
justify-content: center;
justify-content: flex-end;
flex-direction: column;
&:after {
    content: '';
    border-bottom:2px solid #EF3340;
    width: 100%;
    display: block;
    
    margin-top: 32px;
}
`
export const WrapperPlumbH3= styled.div`
width: 128px;
height: 32px;
display: flex;
align-items: center;
text-align: center;
margin-top: 64px;
justify-content: center;
justify-content: flex-end;
flex-direction: column;
&:after {
    content: '';
    border-bottom: 1px solid #E4E8F7;
    width: 100%;
    display: block;
    
    margin-top: 32px;
}
`
export const TextWrapper= styled.div`
    width: 279px;
    height: 192px;
    margin-right:auto;
    margin-left: auto;
    margin-top: 16px;
`
export const WrapperMont= styled.div`

    width: 320px;
    @media (max-width: 768px) { 
        display: none;    
     }
`
export const WrapperMontData= styled.div`
    width: 224px;
    margin-left: 30%;
    margin-right: auto;
    @media (max-width: 40em) {
        display:none;
        
  }
    
`
export const Button=styled.button`

    background: #EF3340;
    border-radius: 8px;
    width: 192px;
    color: white;

    //height: 48px;
    font-size: 14px;
    height: 48px;
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
 

    `
    Button.defaultProps={
      marginTop: '32px',
      marginLeft: '30%',
      marginRight: 'auto',
    }
    export  const WrapperButton=styled.div`
    margin-top: 16px;
    margin-bottom: 16px;
     display: none;
      background: #FFFFFF;
      justify-content: space-around;
      @media (max-width:40em) { 
        display: flex;   
     } 
/* Shadow 1 */


    `



