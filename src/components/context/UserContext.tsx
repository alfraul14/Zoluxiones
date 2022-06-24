import { createContext } from "react";
import {formularioInterface, montoInterface, User} from '../../types/types'

export type UserContextProps = {
    userState: User;
    updateUser: ( UserDB: User ) => void;
    formulario:formularioInterface;
    updateFormulario: ( formData: formularioInterface ) => void;
    montoState:montoInterface;
    updateMonto: ( costo:montoInterface ) => void;
} 
export const UserContext = createContext<UserContextProps>({} as UserContextProps );