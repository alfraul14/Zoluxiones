import { NavbarMolecule } from "../../molecules/Navbar/NavbarMolecule"
import { HeaderContainer, Img, LogoContainer } from "./styles"

export const NavbarOrganism = () => {
    return (
        <HeaderContainer>
             <LogoContainer marginLeft={['32px','5%']}>
            <Img src="/images/logo.svg" alt="logo rimac"/>
            </LogoContainer>
         <NavbarMolecule/>
     </HeaderContainer>
    )
}