import React from 'react'
import { useState } from "react";
import { createContext } from 'react';

export const WishlistContext = createContext(null);

const getDefaultWishlist = () => {
    let wishlist = []

    return wishlist;
};

export const WishlistContextProvider = (props) => {
  
  const [wishlistItems, setWishlistItems] = useState(getDefaultWishlist());

  const getTotalWishlistAmount = () => {
     return wishlistItems.length;
      
  };

  const addToWishlist = (itemId) => {
        setWishlistItems((prev) => ([...prev, {item: itemId}]));
};

  const removeFromWishlist = (itemId) => {
    setWishlistItems((prev) => (prev.filter((value,index) => value.item !== itemId)));
};

  const doesIncludesItem = (itemId) => { 
      let isValid = false;

      for(const item of wishlistItems) {
        if(item.item === itemId) {
          isValid = true;
        }
      }

      return isValid;
}



  const contextValue = { 
      wishlistItems, 
      addToWishlist, 
      removeFromWishlist, 
      doesIncludesItem,
      getTotalWishlistAmount,
    }; 

 

  return (
     <WishlistContext.Provider value={contextValue}>
      {props.children}
      </WishlistContext.Provider>
  );
};

