
import { UserContext } from './UserContext';
import {formularioInterface, montoInterface, User} from '../../types/types'
import { useState } from 'react';




const userInicial:User={
    userId: 0,
    id: 0,
    title: '',
    completed: false
}
const FormularioInicial:formularioInterface={
    lic: '',
    dni: 0,
    cel: 0,    
}
const monto:montoInterface={
    monto:0  
}

interface props {
    children: JSX.Element | JSX.Element[]
}

export const UserProvider = ({ children }: props ) => {
    const [montoState, setMontoState] =useState(monto);
    const [userState, setDatauser] =useState(userInicial);
    const [formulario,setFormulario]=useState(FormularioInicial);
  
    const updateUser = (UserDb:User) =>{
        setDatauser({...userState,...UserDb})
    }
    const updateFormulario = (formData:formularioInterface) =>{
        setFormulario({...formulario,...formData})
    }
    const updateMonto = (costo:montoInterface) =>{
        setMontoState({...montoState,...costo})
    }


    return (
        <UserContext.Provider 
         value={{formulario,updateFormulario,userState, updateUser,montoState,updateMonto}}>
            { children }
        </UserContext.Provider>
    )
}