import { useState } from "react"
export const useInputValue = initialvalue => {
    const [value, setValue] = useState(initialvalue)
    const [valuecxb,setValuecxb]=useState(true)
    const [error, setError] = useState(false)
    const onChange = e => {

       
        if(e.target.name==='cxb'){
            setValuecxb(!valuecxb)
                    }
        setValue(e.target.value);
        if(e.target.name==='dni'){  
           if (e.target.value.length<8 | e.target.value.length>8)return  setError(true) }
        if(e.target.name==='celular'){
        if (e.target.value.length<9 | e.target.value.length>9) return setError(true) }      
        if(e.target.name==='placa'){
            if (e.target.value.length<6 | e.target.value.length>6) return setError(true) }      
            
        setError(false)
               
        }
    return { valuecxb,value, onChange,error }
  }
  