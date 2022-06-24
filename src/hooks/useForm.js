import { useState } from 'react'

export const useForm =() => {
const [focus,setFocus]=useState(false)
  const handleFocus =()=>{
    setFocus(true)
}
const handleBlur =()=>{
    setFocus(false)
        
}
  return ({
    handleFocus, handleBlur, focus
  })
}
