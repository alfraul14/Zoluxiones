import { ChicoRimac } from "../../atoms/ChicoRimac"
import { H1 } from "../../atoms/Login/LoginImgMl/styles"
import { H1Red } from "../../atoms/Login/LoginImgMl/styles"
import { Cobertura, VerMas } from "../../molecules/ArmaTuPlan/Cobertura/Cobertura"
import { PriceList } from "../../molecules/ArmaTuPlan/PriceList/PriceList"
import { Steps } from "../../molecules/ArmaTuPlan/Steps/Steps"
import { Volver } from "../../molecules/ArmaTuPlan/Volver/Volver"
import { BoxBoyLic, BoxSum, BoxSumButtom, BoxSumButtomTrue, BoxSumButtomWrapper, BoxSumText, BoxSumTextMinMax, BoxText, Button, H2Reusable, H3Reusable, Line, NavCoberture, PReusable, TextWrapper, Wrapper, WrapperBody, WrapperBodyImportant, WrapperButton, WrapperH3, WrapperMont, WrapperMontData, WrapperPlumbH3, WrapperSteps, WrapperText } from "./styles"
import useState from 'react-usestateref';
import {useVariarMonto} from '../../../hooks/useVariarMonto'
import { useGetcar } from "../../../hooks/useGetCar"
import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { useNavigate } from "react-router-dom"
export const ArmatuPlanOrganism = () => {
    const {año,modelo,marca,loading}=useGetcar()    
    const {formulario,userState,updateMonto} =useContext(UserContext)
    let navigate = useNavigate ();
    const [sumaAsegurada,setSumaAsegurada,refSumaAsegurada]=useState<number>(16000)
    const cobertura1=useVariarMonto()
    const cobertura2=useVariarMonto()
    const cobertura3=useVariarMonto()    
    const [monto,setMonto] = useState<number>(20)
 
     const handleMonto = () =>{
        updateMonto({monto})
        navigate("/gracias")
    }


    const ActualizarSumaAsegurada=(operacion:string)=>{
        if(operacion==='mas'&& refSumaAsegurada.current<16500){
              setSumaAsegurada(SumaAsegurada=>sumaAsegurada+100)      
         }
         if(operacion==='menos'&& refSumaAsegurada.current>12500){
             setSumaAsegurada(SumaAsegurada=>sumaAsegurada-100) 
         }
        if(refSumaAsegurada.current>16000){
            cobertura2.customAdquirido(false)         
            if(cobertura2.adquirido){
                ActualizarMonto(20,true)
            }
             //actualizar monto aumentar               
        }if(refSumaAsegurada.current<16000){
            //actualizar monto quitar   
            cobertura2.customAdquirido(true)
            if(!cobertura2.adquirido){
                ActualizarMonto(20,false)
            }
            
       }
     
    }
    const ActualizarMonto= (precio:number,operador:boolean) => {
        if(operador===false){
             setMonto(monto+precio)
        }else{
            setMonto(monto-precio)
        }

    }


    return (
        <Wrapper>
            <WrapperSteps >
                <Steps/>
            </WrapperSteps>
          
            <WrapperBody>
                <WrapperBodyImportant>
                     <Volver/>
                     <WrapperText display={['none','block']}>
                        <H1 fontSize={'28px'} marginTop={'8px'}letterSpacing={'-0.6px'} >¡Hola, <H1Red fontSize={'40px'}>{userState.title}!</H1Red></H1>
                        <PReusable>Conoce las coberturas para tu plan</PReusable>
                    </WrapperText>
                    <WrapperText display={['block','none']} mt={'40px'}>
                        <H1 fontSize={'28px'} letterSpacing={'-0.6px'} lineHeight={'36px'} >Mira las coberturas</H1>
                        <PReusable fontSize={'16px'}  lineHeight={'28px'} color={'#676F8F'}>Conoce las coberturas para tu plan</PReusable>
                    </WrapperText>
                    <BoxBoyLic>
                        <BoxText>
                            <PReusable lineHeight={'20px'}fontSize={'12px'}  letterSpacing={'0.2px'} color={'#A3ABCC'}>Placa: {formulario.lic}</PReusable>    
                            <PReusable fontSize={['16px','21px']}  color={'#494F66'}>{loading?'Cargando...':marca+' '+año+' ' +modelo}</PReusable>  
                        </BoxText>
                        <ChicoRimac/>
                    </BoxBoyLic>
                    <BoxSum>
                     <BoxSumText>
                         <PReusable fontSize={'16px'}  color={'#494F66'}>Indica la suma asegurada</PReusable>
                         <BoxSumTextMinMax>
                            <PReusable fontSize={'12px'}  letterSpacing={'0.6px'}  color={'#494F66'}>MIN $12,500</PReusable>
                            <PReusable fontSize={'12px'}  letterSpacing={'0.6px'}  color={'#494F66'}>MAX $16,500</PReusable>
                         </BoxSumTextMinMax>    
                     </BoxSumText>
                     <BoxSumButtom>
                        <BoxSumButtomWrapper>
                            <BoxSumButtomTrue onClick={()=>ActualizarSumaAsegurada('menos')}>
                                <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0001 1L1.00012 1" stroke="#6F7DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </BoxSumButtomTrue>
                            <PReusable fontSize={'16px'}  letterSpacing={'0.2px'}  color={'#494F66'}>${sumaAsegurada.toLocaleString('en-US')}</PReusable>
                            <BoxSumButtomTrue onClick={()=>ActualizarSumaAsegurada('mas')}>
                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.00012 3V13" stroke="#6F7DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M13.0001 8L3.00012 8" stroke="#6F7DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </BoxSumButtomTrue>
                        </BoxSumButtomWrapper>                        
                     </BoxSumButtom>                        
                    </BoxSum>
                    <Line mt={'42px'} mb={'55px'}/>
                    <H2Reusable mb={'32px'}> Agrega o quita coberturas</H2Reusable>
                    <NavCoberture>
                       <WrapperH3> <H3Reusable color={'rimac'}>Protege a  tu auto</H3Reusable></WrapperH3>
                       <WrapperPlumbH3><H3Reusable>Protege a los que te rodean</H3Reusable></WrapperPlumbH3>
                       <WrapperPlumbH3><H3Reusable>mejora tu plan</H3Reusable></WrapperPlumbH3>
                    </NavCoberture>
                    <Cobertura  precio={15} ActualizarMonto={ActualizarMonto} cobertura={cobertura1} src1={"/images/llanta.svg"} text={"Llanta robada"} src2={"/images/up.svg"}  />
                    <TextWrapper> 
                        <PReusable fontSize={'14px'}  color={'#676F8F'}>He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más </PReusable>
                        <VerMas  ver={false}/>
                    </TextWrapper>
                        
                    <Line mt={'32px'} mb={'32px'}/>
                    <Cobertura precio={20} ActualizarMonto={ActualizarMonto} cobertura={cobertura2} src1={"/images/damage.svg"} text={" Choque y/o pasarte la luz roja "} src2={"/images/down.svg"}                    />
                        <VerMas ver={true}/>
                    <Line mt={'32px'} mb={'32px'}/>
                    <Cobertura precio={50} ActualizarMonto={ActualizarMonto}  cobertura={cobertura3} src1={"/images/perdida.svg"} text={"Atropello en la vía Evitamiento "} src2={"/images/down.svg"}                    />
                         <VerMas ver={true}/>
                    <Line mt={'32px'} mb={'32px'}/>
                </WrapperBodyImportant>
                <WrapperMont>
                       <WrapperMontData>
                            <PReusable  fontWeight={'700'}lineHeight={'16px'}fontSize={'12px'}  letterSpacing={'0.6px'} color={'#494F66'}>MONTO</PReusable>    
                            <PReusable  marginTop={'10px'} lineHeight={'36px'}fontSize={'28px'}  letterSpacing={'-0.2px'} color={'#494F66'}> ${monto},00 </PReusable>    
                            <PReusable  marginTop={'4px'} lineHeight={'20px'}fontSize={'12px'}  letterSpacing={'0.2px'} color={'#676F8F'}>mensuales </PReusable>    
                            <PReusable  marginTop={'43px'} lineHeight={'24px'}fontSize={'16px'}  letterSpacing={'0.2px'} color={'#676F8F'}>El precio incluye: </PReusable>    
                            <PriceList text={'Llanta de respuesto'}/>
                            <PriceList text={'Analisis de motor'}/>
                            <PriceList text={' Aros gratis'}/>
                                                 
                        </WrapperMontData>
                        
                            
                            <Button onClick={()=>{handleMonto()}} >LO QUIERO</Button>   
                          
                </WrapperMont>                               
            </WrapperBody> 
            <Line mb={'0px'} borderBottom={'1px solid  #EF3340'}display={['block','none']}/>
            <WrapperButton> 
                            
                            <PReusable display={['block','none']} marginTop={'10px'} lineHeight={'36px'}fontSize={'28px'}  letterSpacing={'-0.2px'} color={'#494F66'}>${monto},00 </PReusable>    
                            <Button onClick={()=>{handleMonto()}} marginRight={'0px'}marginLeft={'0px'}marginTop={'0px'}>LO QUIERO</Button>   
             </WrapperButton>

         </Wrapper>
    )
}