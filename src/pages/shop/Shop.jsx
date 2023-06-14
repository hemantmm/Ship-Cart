import React from 'react'
import {PRODUCTS} from '../../ProductsData'
import Product from './Product'
import './Shop.css'

function Shop() {
  return (
    <div className='shop'>
        <div className="shopTitle">
            <h1>hemant shop</h1>
        </div>
        <div className="products">
            {PRODUCTS.map((product)=>
                <Product data={product} />
            )}
        </div>
    </div>
  )
}

export default Shop