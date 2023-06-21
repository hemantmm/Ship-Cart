import React, { useEffect, useState } from 'react'
// import { Button } from '@mui/material'
import { ImageA } from './ImageA'
import './home.css'
import 'animate.css'


function Home() {

  const [cur,setCur]=useState(0)
  const imageLength=ImageA.length-1

  const prev=()=>{
    setCur(cur===0 ? imageLength : cur-1)
  }

  const next=()=>{
    setCur(cur === imageLength ? 0 : cur+1)
  }

  // useEffect(()=>{
  //   setInterval(() => {
  //     next()
  //   }, 3000);
  // },[])

  // useEffect(()=>{
  //   setCur(0)
  // },[])

  return (
    // <SlideShowss
    <main className='app'>
      {/* <SlideShows */}
        {/* <button className='border-solid bg-red-500'>prev</button> */}
        {
          ImageA.map((images,i)=>{
            return  cur===i && (
              <div className='imag'>
              <img src={images.path} className='slideImage animate__animated animate__zoomIn' />
              </div>
            )
          })
        }
        <button onClick={()=>prev()} className='buttonPrev'>prev</button>
        
        <button onClick={()=>next()} className='buttonNext'>next</button>
    </main>
  )
}

export default Home