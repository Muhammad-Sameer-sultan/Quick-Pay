'use client'
import  { useState, useEffect } from 'react'
import FirstSlide from './FirstSlide'
import SecondSlide from './SecondSlide'

const Header = () => {
    const [refresh, setrefresh] = useState(false)
    const [showSlide1, setShowSlide1] = useState(false)
    const [showSlide2, setShowSlide2] = useState(false)

    useEffect(() => {
        setShowSlide1(true)     
        setTimeout(() => {
    setShowSlide1(false)     
       setShowSlide2(true)
    }, 6000);
    
    setTimeout(() => {
        setrefresh(!refresh)
        setShowSlide1(true)     
        setShowSlide2(false)
}, 8000);
    }, [refresh])
    

  return (
    // <div  className='relative h-[830px] max-lg:h-[1300px]   max-xsm:h-[920px]'>

    <div className=' relative h-[830px] max-lg:h-[1300px] max-xsm:h-[920]'>
        {/* <div className={`absolute top-0 w-full ${showSlide1?'opacity-1':"opacity-0"}`}><FirstSlide/></div> */}
        <div className={` absolute top-0 w-full ${true?'opacity-1':"opacity-0"}`}><SecondSlide/></div>
    </div>
  )
}

export default Header