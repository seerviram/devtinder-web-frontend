import * as React from 'react'
import axios from 'axios'
import { BASEURL} from "./constant";

const Login = ()=> {
    const [emailId, setEmailId] = React.useState("")
    const [password, setPassword] = React.useState("")

  const handleLogin = async ()=> {
      try{
         const data = await axios.post(`${BASEURL}/login`, {
            emailId: emailId,
            password: password
         })
         console.log('login successfully', data)
  
      }catch(e){
        console.log('error occured',e)
      }
  }

    return(
        <div>
            <label> email</label>
            <input type="text" name="email" value={emailId} onChange={(e)=> setEmailId(e.target.value)} style={{border:"1px solid green"}}/>
            <label> password</label>
             <input type="text" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} style={{border:"1px solid green"}}/>
 
             <button onClick={handleLogin} style={{border:"1px solid red", cursor:"pointer"}}>Submit</button>
      </div>
    )
}
export default Login;