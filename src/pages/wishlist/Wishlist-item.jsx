import React from 'react'
import { useContext } from 'react'
import { WishlistContext } from "../../context/Wishlist-context"


 export const WishlistItem = (props) => {
  const {id,productName,price,productImage}= props.data
  const { removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="wishlistItem">
      <img src={productImage} alt={productName}/>
      <div className="description_wishlist">
          <p> <b> {productName} </b></p>
          <p>${price}</p>
          <div className="removeFromWishlist">
              <button onClick={() => removeFromWishlist(id)}> Remove from wishlist </button>
          </div>
      </div>
    </div>
  )
}