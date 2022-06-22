import styled from 'styled-components'
import { space   } from 'styled-system'

export const Img = styled.img`
display: flex;
flex-direction: column;
text-align: center;
z-index:1;  
`
export const HeaderContainer = styled.div`
    max-width: 1184px;
    margin:0 ;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;     
`

export const LogoContainer = styled.div`
   z-index:1;   
   ${space }
 `
