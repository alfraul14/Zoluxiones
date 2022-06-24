
import { User } from "../types/types"
  
  export const GetUser =  ():Promise<User>=>{    
        return  fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())           
  }
  export const GetCar =  ():Promise<User>=>{    
      return  fetch('https://api.npoint.io/40d6848886aa9e199c21')
      .then(res => res.json())           
}
   
       
      
