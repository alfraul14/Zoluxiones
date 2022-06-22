import React from "react";
import {LoginTitle} from '../../../atoms/Login/LoginForm/LoginTitle'
import {LoginSelect} from '../../../atoms/Login/LoginForm/LoginSelect'
import {LoginCel} from '../../../atoms/Login/LoginForm/LoginCel'
import {LoginLic} from '../../../atoms/Login/LoginForm/LoginLic'
import {LoginCheckbox} from '../../../atoms/Login/LoginForm/LoginCheckbox'
import {LoginButton} from '../../../atoms/Login/LoginForm/LoginButton'
import { LoginFormContainer, LoginWrapp } from "./styles";

export const LoginForm = () =>{
    return(
        <LoginFormContainer>
            <LoginWrapp>
                <LoginTitle/>
                <LoginSelect/>
                <LoginCel/>
                <LoginLic/>
                <LoginCheckbox/>
                <LoginButton/>
            </LoginWrapp>
        </LoginFormContainer>
    )
}
