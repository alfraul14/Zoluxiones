import { useContext } from "react"
import { UserContext } from "../components/context/UserContext"
import {GetUser} from "../services/GetUser"
export const UseUpdateUser = () => {
    const {userState,updateUser} =useContext(UserContext)
  const updateHookUser=()=>{    
    GetUser().then(updateUser)
  }
    return{userState,updateHookUser}
}

