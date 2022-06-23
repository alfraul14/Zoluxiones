import { H2Reusable, PReusable } from "../../../organisms/ArmaTuPlanOrganim/styles"
import { Input, Img,Label, ImgContainer, PlusMinContainer, PlussMin, Switch, Wrapper, InputWrapper, VerMasWrapper } from "./styles"

type Props={
    src1:string,
    text:string,
    src2:string
}
export const Cobertura = ({src1,text,src2}:Props) => {
    return (
        
        <Wrapper>
            
            <img src={src1} alt='cobertura rimac'/>
            <PlusMinContainer>
            <H2Reusable > {text}</H2Reusable>
            <PlussMin display={['none','flex']}>
                 <Img mr={'12px'} src={src2} alt='cobertura rimac'/>
                 <PReusable fontSize={'12px'}   color={'#6F7DFF'}>   QUITAR</PReusable>

                 
            </PlussMin>
            </PlusMinContainer>
            <ImgContainer  display={['none','block']}src="/images/up.svg" alt='desplegar'/>
            <InputWrapper display={['block','none']}>
                <Label >            
                <Input  type="checkbox" />
                <Switch />
                </Label>
            </InputWrapper>
        </Wrapper>
       
    )
}
type PropsVer ={
    ver:boolean
}
export const VerMas= ({ver}:PropsVer) => {
    return (
        <VerMasWrapper display={['flex','none']}>
            <PReusable fontSize={'10px'}  lineHeight={'16px'} letterSpacing={'0.8px'} font-weight={700} color={'#6F7DFF'}>   {ver ?"VER MÁS":"VER MENOS"}</PReusable>
             <ImgContainer src={!ver ?'/images/up.svg':'/images/down.svg'
             } alt='desplegar'/>
        </VerMasWrapper>

       
    )
}