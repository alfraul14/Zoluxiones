import styled from 'styled-components'
import { layout } from 'styled-system'


export const LoginContainer = styled.div`
display: flex;
position:relative;
flex-wrap: nowrap;
flex-direction:row;
max-width: 1184px;
    margin:0 ;
    margin-left: auto;
    margin-right: auto;

@media (max-width: 40em) {
    flex-direction:column;
  }
`


export const LoginFormWrapper = styled('div')(
  {  
  },
  layout
)


export const LoginImgWrapper = styled('div')(
  {  
  },
  layout
)

