import React from "react";  
import { LoginImg } from "../../molecules/Login/LoginImg";
import { LoginForm } from "../../molecules/Login/LoginForm";
import {LoginContainer,LoginImgWrapper,LoginFormWrapper} from './styles'
export  const LoginOrganism = () =>{
    return (
        <LoginContainer>
           <LoginImgWrapper width={['100%','37.83%']}>
                <LoginImg/>
           </LoginImgWrapper>
           <LoginFormWrapper width={['100%','62.17%']}>
               <LoginForm/>
           </LoginFormWrapper>
        </LoginContainer>

    )
}
