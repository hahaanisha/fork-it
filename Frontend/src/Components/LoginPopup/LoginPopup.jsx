import React,{useState} from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Sign Up")
  return (
    <div className='login-popup'>
    <form className="login-popup-container" action="">
        <div className="login-popup-title">
            <h2 className='text-3xl font-bold'>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
            {currState === "Login" ? <></> : <input type="text" placeholder='Your name' required /> }
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='Your password' required/>
        </div>
        <button>{currState==="Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
            <input type="Checkbox" required/>
            <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currState==="Login" 
        ?  <p>Create a new account? <span onClick={()=> setCurrState("Sign Up")}>Click here</span></p> 
        :  <p>Already have an account? <span onClick={()=> setCurrState("Login")}>Login here</span></p> 
        }
    </form>


    </div>
  )
}

export default LoginPopup