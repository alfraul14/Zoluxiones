import React from "react";
import {InputField,Select,InputLabel,Label,InputDoc, InputContainer,Error} from './styles'
export  const LoginSelect = ({dni})=>{
    return(
        <InputContainer>
        <InputField>
            <Select name="documento" id="documento">
                <option value="volvo">DNI</option>
                <option value="saab">C.E.</option>
            </Select>
            <InputLabel            
            >
                <InputDoc
                autoFocus
                 type='number'
                 name='dni'
                 required
                     {...dni}
                />
                <Label mayor={dni.value}>Nro. de doc</Label>
            </InputLabel>
        </InputField>
        {dni.error&&  <Error>*Ingrese un número de documento válido</Error>}
        </InputContainer>
    )

}
