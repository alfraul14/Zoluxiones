import { H2Reusable, PReusable } from "../../../organisms/ArmaTuPlanOrganim/styles"
import { Img, PlussMin, Wrapper } from "./styles"

type Props={
    src1:string,
    text:string,
    src2:string
}
export const Cobertura = ({src1,text,src2}:Props) => {
    return (
        
        <Wrapper>
            <img src={src1} alt='cobertura rimac'/>
            <div>
            <H2Reusable > {text}</H2Reusable>
            <PlussMin>
                 <Img mr={'12px'} src={src2} alt='cobertura rimac'/>
                 <PReusable fontSize={'12px'}   color={'#6F7DFF'}>   QUITAR</PReusable>

                 
            </PlussMin>
            </div>
            <img src="/images/up.svg" alt='desplegar'/>
        </Wrapper>
       
    )
}