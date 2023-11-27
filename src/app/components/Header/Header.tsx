'use client'
import  { useState, useEffect } from 'react'
import FirstSlide from './FirstSlide'

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

    <div className='bg-blue-500  relative h-[830px] max-lg:h-[1300px] max-xsm:h-[920]'>
        <div className={`bg-red-500 absolute top-0 w-full ${true?'opacity-1':"opacity-0"}`}><FirstSlide/></div>
        {/* <div className={`bg-green-500 absolute top-0 w-full ${showSlide2?'opacity-1':"opacity-0"}`}>sddd2</div> */}
    </div>
  )
}

export default Header