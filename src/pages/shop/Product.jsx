import React, { useContext, useState } from 'react'
import { ShopContext } from '../../context/shop-context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import { WishlistContext } from '../../context/Wishlist-context';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function Product(props) {
    
    const {id,productName,price,productImage}= props.data
    const {addToCart,cartItems}=useContext(ShopContext)
    const {addToWishlist, doesIncludesItem, removeFromWishlist}=useContext(WishlistContext)

    const cartItemAmount=cartItems[id]

    const notify=()=>{toast("Item added to your cart!")
  }

  const handleWishlistClick=()=>{
      if(!doesIncludesItem(id))
      {
        addToWishlist(id)
        NotificationManager.success('Item added to wishlist');
      }
      else{
        removeFromWishlist(id)
        NotificationManager.warning('Item removed from wishlist')
      }
  }


  return (
    <div className='product'>
        <img src={productImage} alt="" />
        <div className="description">
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
        <div>
        </div>
        <div className='notifys' onClick={notify}>
        <button className="addToCartBttn" onClick={()=>addToCart(id)}>
            Add to cart {cartItemAmount>0 && <>({cartItemAmount})</>}
            </button>
            </div>

          <div >
            <button className='addToWishListBttn' onClick={handleWishlistClick}>
            {doesIncludesItem(id) ? <AiFillHeart size={25} color='rgb(255, 0, 153)' /> : <AiOutlineHeart size={25} style={{color:'rgb(255, 0, 153)'}} />}
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

    <NotificationContainer />
    </div>
  )
}

export default Product