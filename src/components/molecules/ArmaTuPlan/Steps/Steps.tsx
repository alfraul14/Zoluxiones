import { PText, Span, StepWrap, StepWrapFinal } from "./styles"

export const Steps = () => {
    return (
        <>
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
        </>
    )
}