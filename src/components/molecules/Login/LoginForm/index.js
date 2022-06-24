import React, { useContext } from "react";
import {LoginTitle} from '../../../atoms/Login/LoginForm/LoginTitle'
import {LoginSelect} from '../../../atoms/Login/LoginForm/LoginSelect'
import {LoginCel} from '../../../atoms/Login/LoginForm/LoginCel'
import {LoginLic} from '../../../atoms/Login/LoginForm/LoginLic'
import {LoginCheckbox} from '../../../atoms/Login/LoginForm/LoginCheckbox'
import {LoginButton} from '../../../atoms/Login/LoginForm/LoginButton'
import { LoginFormContainer, LoginWrapp } from "./styles";
import { UseUpdateUser } from "../../../../hooks/useUpdateUser";
import { useInputValue } from "../../../../hooks/useInputValue";
import { UserContext } from "../../../context/UserContext";
import { useNavigate  } from "react-router-dom"

export const LoginForm = () =>{
    
    let navigate = useNavigate ();
    const {updateHookUser} =UseUpdateUser()
    const {updateFormulario} =useContext(UserContext)
    const cel = useInputValue('')
    const lic = useInputValue('')
    const dni = useInputValue('')
    const check = useInputValue('')
 
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(cel.error===false && lic.error===false&&dni.error===false&& check.valuecxb===true) 
        console.log("funciona el formulario")
        const formData={
            lic: lic.value,
            dni: dni.value,
            cel: cel.value,
        }  
            updateHookUser()  
            updateFormulario(formData)
            navigate("armatuplan")     
        }
      
        

    return(

        <LoginFormContainer>
            <LoginWrapp onSubmit={handleSubmit}>
                <LoginTitle/>
                <LoginSelect dni={dni} />
                <LoginCel  cel={cel} />
                <LoginLic  lic={lic}/>
                <LoginCheckbox check={check}/>
                <LoginButton  data={'Paolo'}/>
            </LoginWrapp>
        </LoginFormContainer>
    )
}
