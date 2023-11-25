'use client'
import Image from 'next/image'
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import {HiMiniBars3BottomLeft} from 'react-icons/hi2'

const MobileNav = () => {
  // const [activeNav, setActiveNav] = useState ('#')
    const [navClassName, setNavClassName] = useState("nav");
    const [showMenu, setShowMenu] = useState("");
    const [showIcon, setShowIcon] = useState("hidden")
    // const [navBarDisplay, setNavBarDisplay] = useState("hidden");
    
    const toggleMenu = () => {
      if (navClassName === "nav") {
        setNavClassName("nav new_height fixed");
        setShowMenu(" hidden");
        setShowIcon('block')
        // setNavBarDisplay('flex');
      } else {
        setNavClassName("");
        setShowMenu("");
        setShowIcon('hidden')
        // setNavBarDisplay('hidden');
      }
    };

    
  return (
    
      <section className={`xlg:hidden px-[72px] pt-[20px] max-xmd:p-[20px] h-[100px]  ${navClassName}  bg-gradient z-[150] `}>
      <section className='flex justify-between items-center'> 
        <div>
          <Image className='w-[150px]' src={"footerlogo.svg"} width={0} height={0} alt='quick pay logo'></Image>
        </div>

        {/* <div onClick={toggleMenu} className=" text-[#0045A5] text-[32px] max-xsm:text-[24px] xlg:hidden cursor-pointer "> */}
        <div className='text-[#0045A5] text-[32px] max-xsm:text-[24px] xlg:hidden cursor-pointer'>
          <HiMiniBars3BottomLeft onClick={toggleMenu} className={`${showMenu}`}/>
          <FaPlus onClick={toggleMenu} className={`${showIcon}`}/>
        </div>
       
      </section>
      <div>
        dropm links
      </div>
    </section>
  )
}

export default MobileNav