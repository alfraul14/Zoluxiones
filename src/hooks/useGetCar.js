import { useEffect, useState } from 'react'
import { GetCar } from '../services/GetUser'
export const useGetcar =() => {
    const [loading,setLoading]=useState(true)
    const [car,setCar]=useState({
        año:'',
        modelo:'',
        marca:''
    })
    useEffect(() => {
        
        GetCar().then(res=>{setCar(res);setLoading(false)})
        
    }, [])
    

  return ({...car,loading })
}
