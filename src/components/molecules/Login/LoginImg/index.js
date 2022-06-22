import React from "react";
import { LoginImgContainer,LoginAuto,LoginImgContainerMb,LoginAutoMb } from "./styles";
import {LoginImgMl} from '../../../atoms/Login/LoginImgMl/LoginImgAtm'
import {LoginH1} from '../../../atoms/Login/LoginImgMl/LoginH1'
import {LoginPnew} from '../../../atoms/Login/LoginImgMl/LoginPnew'
import {LoginPText} from '../../../atoms/Login/LoginImgMl/LoginPText'
import { LoginCopyright } from '../../../atoms/Login/LoginImgMl/LoginCopyright'


export const LoginImg = () =>{
    return(<>
            <LoginImgContainer>
                <LoginAuto>
                    <LoginImgMl path={"/images/auto.svg" }/>
                    <LoginPnew/>
                    <LoginH1/>
                    <LoginPText/>
                    <LoginCopyright/>
                </LoginAuto>
            </LoginImgContainer>
            <LoginImgContainerMb>
                <LoginAutoMb>               
                    <LoginPnew/>
                    <LoginH1/>
                    <LoginPText/>
                </LoginAutoMb>
                <LoginImgMl path={"/images/carromobile.svg" }/>
            </LoginImgContainerMb>
        </>
            
    )
}
