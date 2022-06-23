import { PReusable } from "../../../organisms/ArmaTuPlanOrganim/styles"
import { Porcentaje, PText, Span, StepsContainer, StepWrap, StepWrapFinal, WrapperMobile, WrapperPorcentaje } from "./styles"

export const Steps = () => {
    return (
        <>
        <StepsContainer display={['none','none','block']}>
        <StepWrap>
            <Span>1</Span>
            <div>
                <PText >Datos</PText>                
            </div>           
        </StepWrap>
        <StepWrapFinal>
            <Span bg={'#6F7DFF'} color={'white'}>2</Span>
            <div>
                <PText >Arma tu Plan</PText>                
            </div>           
        </StepWrapFinal>
        </StepsContainer >
            
        <StepsContainer display={['block','block','none']} >
        < WrapperMobile>
                <PReusable width={'96px'} lineHeight={'16px'}fontSize={'10px'} marginLeft={'10.8%'}  letterSpacing={'0.8px'} color={'#676F8F'}> Paso 2 de 2</PReusable>    
              <WrapperPorcentaje>  <Porcentaje/></WrapperPorcentaje>
            </WrapperMobile>

        </StepsContainer>
        </>
    )
}