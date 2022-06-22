import React from "react";
import {InputCheckbox,Ppolitic,ContainerCheckbox,FalsoCheck,LabelBg,Apolitic} from './styles'
export  const LoginCheckbox = ()=>{
    return(
        <ContainerCheckbox>
            <InputCheckbox type="checkbox" defaultChecked id="cxb" name="cxb"/> 
            <FalsoCheck >
                <LabelBg htmlFor="cxb"/>
                 <Ppolitic>Acepto la <Apolitic>Política de Protecciòn de Datos Personales  </Apolitic> y los <Apolitic>Términos y Condiciones </Apolitic>.</Ppolitic> 
            </FalsoCheck >
           
        </ContainerCheckbox>     
    
    )

}
