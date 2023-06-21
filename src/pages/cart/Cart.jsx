import React,{useContext} from 'react'
import { PRODUCTS } from '../../ProductsData'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './cart-item'
import './cart.css'

import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'

function Cart() {
    const {cartItems,getTotalCartAmount}=useContext(ShopContext)
    const totalAmount=getTotalCartAmount()

    const navigate=useNavigate()


  return (
    <div className='cart'>
        {/* <Navbar /> */}
        <div>
            <h1>Your cart items</h1>
        </div>
        <div className="cartItems">
            {PRODUCTS.map((product)=>{
                if(cartItems[product.id]!==0)
                {
                    return <CartItem data={product} />
                }
            })}
        </div>
        {totalAmount>0?(
        <div className="checkout">
            <p>Subtotal: ${totalAmount}</p>
            <button onClick={()=>navigate('/shop')}>Continue Shopping</button>
            <button>Checkout</button>
        </div>):(
            <h1>Your cart is empty!</h1>
        )
            }
    </div>
  )
}

export default Cart