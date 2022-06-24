
import { User } from "../types/types"
  
  export const GetUser =  ():Promise<User>=>{    
        return  fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())           
  }
       
      
