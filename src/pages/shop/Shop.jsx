import React, { useEffect, useState, useContext } from 'react'
import {PRODUCTS} from '../../ProductsData'
import Product from './Product'
import './Shop.css'
import {MdClear} from 'react-icons/md'


function Shop() {

  const  [data,setData]=useState(PRODUCTS)

  const filterResult=(categoryItem)=>{
    const result=PRODUCTS.filter((curData)=>{
      return curData.category===categoryItem
    })
    setData(result)
  }

  const [sortOrder,setSortOrder]=useState('select')

   const sortProduct=(order)=>{
      const sortedProducts=[...data].sort((a,b)=>{
          if(order==='asc')
          {
            return a.price-b.price;
          }
          else{
              return b.price-a.price;
          }
      })
      setData(sortedProducts)
      setSortOrder(order)
   }

   const clearFilter=()=>{
    setData(PRODUCTS)
   }



  return (

    <>
      <div className='shops'>
      
    <div className='shop'>
<div className="buttons">
  <span className='filter cursor-pointer'>Filter</span>
  <button onClick={()=>filterResult('mobile')}>Mobile</button>
  <button onClick={()=>filterResult('laptop')}>Laptop</button>
  <button onClick={()=>filterResult('camera')}>Camera</button>
  <button onClick={()=>filterResult('jacket')}>Jacket</button>
  <button onClick={()=>setData(PRODUCTS)} className='clearFilter'>Clear Filter</button>
  </div>


<div className="sort-container ">
        <span className="sort-label">Sort by Price:</span>
        <select className="sort-select"  value={sortOrder} onChange={(e)=>{
          if(e.target.value==='clear')
          {
            clearFilter()
          }
          else{
            sortProduct(e.target.value)
          }
        }}>
         <option value="">--Select--</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
          <option value="clear">Clear Filter</option>
        </select>
      </div>


    </div>
        <div className="shopTitle">
            <h1>hemant shop</h1>
        </div>
        <div className="products">
            {data.map((product)=>
                <Product data={product} />
            )}
        </div>
        </div>

    </>
  )
}

export default Shop