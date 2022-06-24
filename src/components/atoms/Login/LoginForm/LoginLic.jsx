import React from "react";
import {Input, InputLabel, Label,InputContainer,Error} from './styles'
export  const LoginLic = ({lic})=>{
   
    return(
        <InputContainer>
            <InputLabel>
                <Input 
                type='text'
                name='placa'
                required
                    {...lic}
                 />   
                <Label mayor={lic.value}>Placa</Label>     
            </InputLabel>
            {lic.error&&  <Error>*Ingrese una placa válida</Error>}

        </InputContainer>
    )

}
