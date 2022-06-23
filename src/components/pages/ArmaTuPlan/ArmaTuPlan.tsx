import { ArmatuPlanOrganism } from "../../organisms/ArmaTuPlanOrganim/ArmatuPlanOrganism"
import { NavbarOrganism } from "../../organisms/Navbar/NavbarOrganism"
import { ContainerNavbar } from "../Login/styles"
import { ContainerBg } from "./styles"

export const ArmaTuPlan = () => {
    return (
        <>
        <ContainerNavbar borderBottom={'1px solid #E4E8F7'}>
            <NavbarOrganism/>
        </ContainerNavbar>
           <ArmatuPlanOrganism/>    
       

        <ContainerBg/>
                       
                   
        </>
    )
}