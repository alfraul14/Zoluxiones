import React from "react";
import { Container,Background,BackgroundMb} from "./styles";
import { LoginOrganism } from "../../organisms/LoginOrganism";
import {NavbarOrganism} from '../../organisms/Navbar/NavbarOrganism'
export const Login = () =>{
    return(
        <>
        <Container>
            <NavbarOrganism/>
        </Container>
            <Background/>
            <BackgroundMb/>
            <LoginOrganism/>

        </>
    )
}