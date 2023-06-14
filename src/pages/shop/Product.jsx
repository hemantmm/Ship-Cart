import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product(props) {
    
    const {id,productName,price,productImage}= props.data
    const {addToCart,cartItems}=useContext(ShopContext)

    const cartItemAmount=cartItems[id]

    const notify=()=>{toast("Item added to your cart!")
      // toast("To see your cart items you have to login")
  }

  return (
    <div className='product'>
        <img src={productImage} alt="" />
        <div className="description">
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
        <div className='notifys' onClick={notify}>
        <button className="addToCartBttn" onClick={()=>addToCart(id)}>
            Add to cart {cartItemAmount>0 && <>({cartItemAmount})</>}
            </button>
            </div>
            <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark" />
    </div>
  )
}

export default Product