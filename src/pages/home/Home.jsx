import React, { useEffect, useState } from 'react'
import { ImageA } from './ImageA'
import './home.css'
import 'animate.css'
import {GrPrevious,GrNext} from 'react-icons/gr'
import Shop from '../shop/Shop'
import {PRODUCTS} from '../../ProductsData'
// import Product from './Product'
import Product from '../shop/Product'

function Home() {

  const [cur,setCur]=useState(0)
  const imageLength=ImageA.length-1

  const prev=()=>{
    setCur(cur===0 ? imageLength : cur-1)
  }

  const next=()=>{
    setCur(cur === imageLength ? 0 : cur+1)
  }

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
    <main className='app'>
        {
          ImageA.map((images,i)=>{
            return  cur===i && (
              <div className='imag'>
              <img src={images.path} className='slideImage animate__animated animate__zoomIn' />
              </div>
            )
          })
        }
        <button onClick={()=>prev()} className='buttonPrev'>
          <GrPrevious size={30} />
        </button>
        
        <button onClick={()=>next()} className='buttonNext'>
          <GrNext size={30} />
        </button>
    </main>
    {/* <Shop /> */}

    <div className="products">
            {data.map((product)=>
                <Product data={product} />
            )}
        </div>
    </>
  )
}

export default Home