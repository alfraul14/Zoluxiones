import { useState } from "react"
export const useVariarMonto = () => {
    const [adquirido,setAdquirido] =useState(false)
    const [oferta,setOferta] =useState('noinicializado')
  const updateAdquirido = () =>{    
    setAdquirido(!adquirido)
  }
  const customAdquirido = (custom) =>{    
    setAdquirido(custom)
    if(custom){
        setOferta('yes')    
    }
    if(!custom){
        setOferta('no')    
    }    
  }
    return{adquirido,updateAdquirido,customAdquirido,oferta}
}

