import React from "react";
import {Input, InputLabel, Label,InputContainer,Error} from './styles'
export  const LoginLic = ()=>{
    return(
        <InputContainer>
            <InputLabel>
                <Input  />   
                <Label>Placa</Label>     
            </InputLabel>
            <Error>*Ingrese la placa</Error>

        </InputContainer>
    )

}
