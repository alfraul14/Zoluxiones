import React from "react";
import {Input,InputContainer,InputLabel,Label,Error} from './styles'
export  const LoginCel = ({cel})=>{

  

   

    return(
        <InputContainer>
            <InputLabel>
                <Input {...cel}
                 required 
                 type='number'
                 name='celular'
                 
                  /> 
                <Label mayor={cel.value}>
                    Celular                
                </Label>       
            </InputLabel>
           {cel.error&& <Error>*Ingrese un número de celular válido</Error>}

        </InputContainer>
    )

}
