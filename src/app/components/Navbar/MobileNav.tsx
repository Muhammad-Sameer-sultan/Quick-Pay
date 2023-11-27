"use client"
import Image from 'next/image';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { HiMiniBars3BottomLeft } from 'react-icons/hi2';

const MobileNav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const [navClassName, setNavClassName] = useState('nav');
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setNavClassName(showMenu ? 'nav' : 'nav new_height fixed');
  };

  return (
    <section className={`xlg:hidden px-[72px] pt-[20px] max-xmd:p-[20px] h-[100px] ${navClassName} overflow-hidden bg-gradient z-[150] `}>
      <div className="flex justify-between items-center">
        <div>
          <Image className="w-[150px]" src="footerlogo.svg" width={0} height={0} alt="quick pay logo" />
        </div>
        <div className="text-[#0045A5] text-[32px] max-xsm:text-[24px] xlg:hidden cursor-pointer">
          <HiMiniBars3BottomLeft onClick={toggleMenu} className={`transition-all duration-400 ease-in ${showMenu ? 'hidden' : 'block'}`} />
          <FaPlus onClick={toggleMenu} className={`transition-all duration-400 ease-in rotate-45 ${showMenu ? 'block' : 'hidden'}`} />
        </div>
      </div>
      <div className={`flex flex-col justify-center items-center ${showMenu ? 'flex' : 'hidden'} gap-6`}>
        <ul className="flex gap-6 flex-col justify-center items-center text-[#1D1C1C] text-lg font-semibold">
          {['Home', 'Features', 'About Us', 'How it works', 'Contact Us'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase().replace(/\s/g, '-')}`} onClick={() => { setActiveNav(`#${item.toLowerCase().replace(/\s/g, '-')}`); toggleMenu(); }} className={activeNav === `#${item.toLowerCase().replace(/\s/g, '-')}` ? 'nav-active' : 'nav-links'}>
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-6 mt-6">
          <button className="w-[131px] h-[43px] font-bold rounded-[40px] border-2 border-[#0045A5] text-[#0045A5]">Login</button>
          <button className="w-[131px] h-[43px] font-bold rounded-[40px] border-2 bg-[#0045A5] border-[#0045A5] text-white">Register</button>
        </div>
      </div>
    </section>
  );
};

export default MobileNav;
