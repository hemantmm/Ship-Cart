import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {BsCart3} from 'react-icons/bs'
import {BiLogIn} from 'react-icons/bi'
import "./Navbar.css";

function Navbar() {


  return (
    <div className='navbar'>
        <div className="links mr-12 flex items-center">
            <Link to='/shop'>Shop</Link>
            <Link to='/cart'>
                <BsCart3 />
            </Link>
            <Link to='/login'>
              <BiLogIn />
            </Link>
        </div>
    </div>
  )
}

export default Navbar