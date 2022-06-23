import { GraciasOrganism } from "../../organisms/Gracias/GraciasOrganism"
import { NavbarOrganism } from "../../organisms/Navbar/NavbarOrganism"
import { ContainerBg } from "../ArmaTuPlan/styles"
import { ContainerNavbar } from "../Login/styles"

export const Gracias = () => {
    return (
        <>
        <ContainerNavbar borderBottom={'1px solid #E4E8F7'}>
            <NavbarOrganism/>
        </ContainerNavbar>
             <GraciasOrganism/>
       

             <ContainerBg/>
                       
                   
        </>
    )
}