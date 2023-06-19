import './App.css';
import {BrowserRouter as Router,Routes,Route, useNavigate} from 'react-router-dom'
import Navbar from './components/Navbar';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import { ShopContextProvider } from './context/shop-context';
import Login from './page/Login';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import {BsCart3} from 'react-icons/bs'
import {BiLogIn,BiLogOut} from 'react-icons/bi'
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';
// import {} from 'react-icons/bi'
// import AppLogo from '/images/AppLogo.jpg'
// import 
// import AppLogo from '../public/AppLogo.jpg'
import image from './images/AppLogo.jpg'

function App() {

  const [isAuth,setIsAuth]=useState(false)

  // const navigate=useNavigate()

  const signUserOut=()=>{
    signOut(auth).then(()=>{
      localStorage.clear()
      setIsAuth(false)
      // navigate("/login")
      window.location.pathname="/login"
    })
  }

  return (
    <div>
    {/* <h2>hello world</h2> */}
    <ShopContextProvider>
    <Router>
      {/* <Navbar /> */}
      <Link to='/'>
        <img src={image} className='w-20 absolute mt-0 cursor-pointer' alt="" />
      </Link>
      <div className='navbar'>
        <div className="links mr-12 flex items-center">
            <Link to='/'>Shop</Link>
            {!isAuth ? <Link to='/login'>
              <BiLogIn />
            </Link> :(
              <>
              <Link to='/cart'>
                <BsCart3 />
            </Link>
            <button className='text-slate-300' onClick={signUserOut}>
              <BiLogOut size={25} className='ml-4' />
              </button>
            {/* <button className='text-slate-300' onClick={signUserOut}>
            {BiLogOut}
            </button> */}
              </>
            )}
        </div>
    </div>

      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
    </ShopContextProvider>

    </div>
  );
}

export default App;
