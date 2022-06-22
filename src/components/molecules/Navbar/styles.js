import styled from 'styled-components'
import { layout } from 'styled-system'
import { color,variant,typography,flexbox   } from 'styled-system'
export const Svg= styled.svg`
font-weight: 400;
font-size: 14px;
line-height: 24px;
text-align: right;
margin: auto;
margin-right:8px;
color: #6F7DFF;
`
export const ContainerContact=styled('div')(
    {
       
     },
     layout  
)
export const Span = styled('span')(
    {  
      marginRight:'23px',
      color:'#676F8F',        
    },
    color,
    typography,
    flexbox,
    variant({
      prop: 'variant',
      scale: 'text',
    })
  )
  Span.defaultProps = {
    display:'flex',
    alignItems:'center',
    textAlign:'right',
       
  }
  export const ContactPhoneMb=styled.div`
        display:none;
        z-index: 1;
        @media (max-width:40em) { 
        display: flex;    
     }

    `