import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;  
    height :64px ;
`
export const Background = styled.div`
  
    background: url('/images/fondo.svg') right top  no-repeat #ECF0FF;
    background-size: cover;
    position: absolute;
    height: 700px;
    z-index: 0;
    width: 39.55%;
    top: 0;
    left:0;
    background-position-x: left ;
    @media (max-width: 575.8px) {
        display: none;
  }
 
`
export const BackgroundMb = styled.div`
   
 
    background:#F7F8FC;
    position: absolute;
    height: 308px;
    z-index: 0;
    max-width: 576px;
    width: 100%;
    top:0px;
    background-position-y: -24px;
    @media (min-width: 576px) {
        display: none;
  }

    
   
 
`

