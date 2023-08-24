import React from 'react'
import { PRODUCTS } from '../../ProductsData'
import { WishlistContext } from '../../context/Wishlist-context'
import { useContext } from 'react'
import { WishlistItem } from "./Wishlist-item"
import "./Wishlist.css";

import { useNavigate } from 'react-router';

export const Wishlist = () => {

const { doesIncludesItem, getTotalWishlistAmount } = useContext(WishlistContext);
const totalAmount = getTotalWishlistAmount();

const navigate = useNavigate();

  return (
    <div className="wishlist">
        <div>
            {/* <h1>Articolele din wishlist-ul dumneavoastra</h1> */}
            <h1>Your WishList items are</h1>
        </div>
        <div className="wishlistItems">
            {PRODUCTS.map((product, idx) => (
               doesIncludesItem(product.id) && <WishlistItem key={idx} data={product}/>
            )
         )}
        </div>
  { totalAmount > 0 ? (
        <div className="checkout_wishlist">
            <button onClick={() => navigate("/shop")}> Continue shopping </button>
        </div>
  ) : (
      <h1>The wishlist is empty.</h1>
  )}
    </div>

    
  );
}

