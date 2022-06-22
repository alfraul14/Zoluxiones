import React from "react";
import {InputField,Select,InputLabel,Label,InputDoc, InputContainer,Error} from './styles'
export  const LoginSelect = ()=>{
    return(
        <InputContainer>
        <InputField>
            <Select name="documento" id="documento">
                <option value="volvo">DNI</option>
                <option value="saab">C.E.</option>
            </Select>
            <InputLabel>
                <InputDoc />
                <Label>Nro. de doc</Label>
            </InputLabel>
        </InputField>
        <Error>*Ingrese un número de documento válido</Error>
        </InputContainer>
    )

}
