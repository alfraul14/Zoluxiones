import { createContext } from "react";
import {formularioInterface, User} from '../../types/types'

export type UserContextProps = {
    userState: User;
    updateUser: ( UserDB: User ) => void;
    formulario:formularioInterface;
    updateFormulario: ( formData: formularioInterface ) => void;
} 
export const UserContext = createContext<UserContextProps>({} as UserContextProps );