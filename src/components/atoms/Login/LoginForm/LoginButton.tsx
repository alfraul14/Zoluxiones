import {Button} from './styles'

interface Props{
    handleSendForm:()=>void
}
export  const LoginButton = ({handleSendForm}:Props)=>{

     
    return(
        
      
        <Button type='submit' onClick={handleSendForm} >    COTÍZALO</Button> 
    
    
    )

}
