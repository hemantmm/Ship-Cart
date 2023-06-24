import React from 'react'
import { auth,provider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import '../App.css';
import googleLogo from '../images/googleImage.png'

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
        <p className=''>Sign in with google to continue</p>
        <div onClick={signInWithGoogle}>
        <button className='login-with-google-btn' >
          Sign in with google
          </button>
          <img src={googleLogo} alt="" className='logoGoogle' />
          </div>
    </div>
  )
}

export default Login