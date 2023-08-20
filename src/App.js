import './App.css';
import {BrowserRouter as Router,Routes,Route, useNavigate} from 'react-router-dom'
import Navbar from './components/Navbar';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import { ShopContextProvider } from './context/shop-context';
import Login from './page/Login';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import {BsCart3} from 'react-icons/bs'
import {BiLogIn,BiLogOut} from 'react-icons/bi'
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';
import image from './images/AppLogo.jpg'
import Home from './pages/home/Home';
import {MdHome} from 'react-icons/md'
import {FaShoppingBag} from 'react-icons/fa'
import { PropagateLoader } from 'react-spinners';


function App() {

  const [isAuth,setIsAuth]=useState(false)


  const signUserOut=()=>{
    signOut(auth).then(()=>{
      localStorage.clear()
      setIsAuth(false)
      // navigate("/login")
      window.location.pathname="/"
    })
  }

  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  },[])


  return (
    <div>
    {
      loading ?
      <div className='flex items-center h-screen justify-center laoding'>
      <PropagateLoader color={'#D2181B'} loading={loading} size={20} />
      </div>:
      <ShopContextProvider>
    <Router>
      <Link to='/'>
        <img src={image} className='w-20 absolute mt-0 cursor-pointer' alt="" />
      </Link>
      <div className='navbar'>
        <div className="links mr-12 flex items-center">
          <Link to='/' style={{color:'rgb(47, 213, 255)'}}>
          <MdHome size={30} />
          </Link>
            <Link to='/shop' style={{color:'rgb(47, 213, 255)'}}>
              <FaShoppingBag />
            </Link>
            {!isAuth ? <Link to='/login' style={{color:'rgb(47, 213, 255)'}}>
              <BiLogIn />
            </Link> :(
              <>
              <Link to='/cart' style={{color:'rgb(47, 213, 255)'}}>
                <BsCart3 />
            </Link>
            <button className='text-slate-300' style={{color:'rgb(47, 213, 255)'}} onClick={signUserOut}>
              <BiLogOut size={25} className='ml-4' />
              </button>
              </>
            )}
        </div>
    </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
    </ShopContextProvider>
}
    </div>
  );
}

export default App;
