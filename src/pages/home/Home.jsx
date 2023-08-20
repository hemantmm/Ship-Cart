import React, { useEffect, useState } from 'react'
import { ImageA } from './ImageA'
import './home.css'
import 'animate.css'
import {GrPrevious,GrNext} from 'react-icons/gr'

function Home() {

  const [cur,setCur]=useState(0)
  const imageLength=ImageA.length-1

  const prev=()=>{
    setCur(cur===0 ? imageLength : cur-1)
  }

  const next=()=>{
    setCur(cur === imageLength ? 0 : cur+1)
  }

  return (
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
  )
}

export default Home