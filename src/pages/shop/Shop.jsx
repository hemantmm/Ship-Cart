import React, { useState } from 'react'
import {PRODUCTS} from '../../ProductsData'
import Product from './Product'
import './Shop.css'

function Shop() {

  const  [data,setData]=useState(PRODUCTS)

  const filterResult=(categoryItem)=>{
    const result=PRODUCTS.filter((curData)=>{
      return curData.category===categoryItem
    })
    setData(result)
  }

  return (
    <div className='shop'>

      <div className="buttons">
        <span className='filter cursor-pointer' onClick={()=>setData(PRODUCTS)}>Filter</span>
        <button onClick={()=>filterResult('mobile')}>Mobile</button>
        <button onClick={()=>filterResult('laptop')}>Laptop</button>
        <button onClick={()=>filterResult('camera')}>Camera</button>
        <button onClick={()=>filterResult('jacket')}>Jacket</button>
      </div>

      <div className='shops'>
        <div className="shopTitle">
            <h1>hemant shop</h1>
        </div>
        <div className="products">
            {data.map((product)=>
                <Product data={product} />
            )}
        </div>
        </div>
    </div>
  )
}

export default Shop