import React from "react";
import {Input,InputContainer,InputLabel,Label,Error} from './styles'
export  const LoginCel = ()=>{
    return(
        <InputContainer>
            <InputLabel>
                <Input /> 
                <Label>
                    Celular                
                </Label>       
            </InputLabel>
            <Error>*Ingrese un número de celular válido</Error>

        </InputContainer>
    )

}
