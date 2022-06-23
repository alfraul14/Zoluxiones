import React from "react";
import { ContainerNavbar,Background,BackgroundMb} from "./styles";
import { LoginOrganism } from "../../organisms/LoginOrganism";
import {NavbarOrganism} from '../../organisms/Navbar/NavbarOrganism'
export const Login = () =>{
    return(
        <>
        <ContainerNavbar >
            <NavbarOrganism/>
        </ContainerNavbar>
            <Background/>
            <BackgroundMb/>
            <LoginOrganism/>

        </>
    )
}