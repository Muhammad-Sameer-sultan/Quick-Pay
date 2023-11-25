"use client"
import Image from 'next/image'
import {useState} from 'react'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState ('#')

  return (
    <nav className='bg-white h-[80px] px-[72px] flex justify-between items-center '>
      <div>
      <Image src={"footerlogo.svg"} width={100} height={200} alt="Quick pay logo"/>
      </div>
      <ul className='nav-bar flex gap-8 font-semibold text-[#1D1C1C] text-md'>
        <li><a href="#" onClick={()=>{setActiveNav('#')}} className={activeNav==='#'?'nav-active': 'nav-links'}>Home</a></li>
        <li><a href="#features" onClick={()=>{setActiveNav('#features')}} className={activeNav==='features'?'nav-active': 'nav-links'}>Home</a></li>
      </ul>
      <div>login</div>
    </nav>
  )
}

export default Navbar