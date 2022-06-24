import styled from 'styled-components'
import {border} from 'styled-system'

export const ContainerNavbar = styled.div`
     top: 0px;
    width: 100%;
    position: fixed;
    background-color: white;
    height: 64px;
    z-index: 5;
    border-bottom: 1px solid #E4E8F7;


    ${border}
    @media (max-width: 40em) {
        height: 56px;
  }
`
export const Background = styled.div`  
    background: url('/images/fondo.svg') right top  no-repeat #ECF0FF;
    background-size: cover;
    position: absolute;
    height: 100%;
    z-index: 0;
    width: 39.55%;
    top: 0;
    left:0;
    background-position-x: left ;
    @media (max-width: 40em) {
        display: none;
  }
 `
export const BackgroundMb = styled.div`    
    background:#F7F8FC;
    position: absolute;
    height: 308px;
    z-index: 0;    
    width: 100%;
    top:0px;
    background-position-y: -24px;
    @media (min-width: 40em) {
        display: none;
    }

    
   
 
`

