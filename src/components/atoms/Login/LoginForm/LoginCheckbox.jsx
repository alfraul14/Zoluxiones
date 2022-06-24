import React from "react";
import {Error,InputCheckbox,Ppolitic,ContainerCheckbox,FalsoCheck,LabelBg,Apolitic} from './styles'
export  const LoginCheckbox = ({check})=>{
    return(
        <ContainerCheckbox>
            <InputCheckbox 
            {...check}
            type="checkbox"
             checked={check.valuecxb}
             id="cxb"
              name="cxb"/> 
            <FalsoCheck >
                <LabelBg htmlFor="cxb"/>
                 <Ppolitic>Acepto la <Apolitic>Política de Protección de Datos Personales  </Apolitic> y los <Apolitic>Términos y Condiciones </Apolitic>.</Ppolitic> 
            </FalsoCheck >
            {!check.valuecxb &&  <Error>*Debe aceptar las políticas de protección de datos </Error>}
        </ContainerCheckbox>     
    
    )

}
