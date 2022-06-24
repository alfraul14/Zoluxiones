import { useContext } from 'react';
import { H1, H1Red } from "../../atoms/Login/LoginImgMl/styles"
import { UserContext } from "../../context/UserContext"
import { Line, PReusable, Wrapper } from "../ArmaTuPlanOrganim/styles"
import { Button, ImgSofa, WrapperTextGracias } from "./styles"

export const GraciasOrganism = () => {
    const {montoState} =useContext(UserContext)
   
    
   
    return (
        <Wrapper justifyContent="space-around">
     
                <ImgSofa display={['none','block']} src="/images/sofa.svg" alt='sof rimac'/>
                <ImgSofa display={['block','none']} src="/images/sofamb.svg" alt='sof rimac'/>
          
            <WrapperTextGracias>
                <H1Red fontSize={['28px','36px']}>¡Te damos la bienvenida!</H1Red>
                <H1 marginBottom={['24px',0]}marginTop={0} display={'block'} fontSize={['28px','36px']} letterSpacing={'-0.2px'} lineHeight={'48px'} >Cuenta con nosotros para proteger tu vehículo</H1>
                <PReusable marginTop={'16px'}color={'#676F8F'} lineHeight={'28px'} fontSize={'16px'}>Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:</PReusable>
                <PReusable color={'#676F8F'} lineHeight={'28px'} fontSize={'16px'}>joel.sanchez@gmail.com de monto ${montoState.monto}</PReusable>
                <Button mt={'60px'}>cómo usar mi seguro</Button>
            </WrapperTextGracias>
            <Line   mt={'56px'} borderBottom={'1px solid  #E4E8F7'}display={['block','none']}/>
            <PReusable display={['block','none']} textAlign={'center'} padding={'32px'} color={'#A3ABCC'} lineHeight={'20px'} fontSize={'12px'}>© 2021 RIMAC Seguros y Reaseguros.</PReusable>
        </Wrapper>
    )
}