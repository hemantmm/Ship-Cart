import React from 'react'
import { auth,provider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function Login({setIsAuth}) {

    const navigate=useNavigate()

    const signInWithGoogle=()=>{
        signInWithPopup(auth,provider).then((result)=>{
            localStorage.setItem("isAuth",true)
            setIsAuth(true)
            navigate("/")
        })
    }

  return (
    <div className='loginPage'>
        <p>Sign in with google to continue</p>
        <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  )
}

export default Login