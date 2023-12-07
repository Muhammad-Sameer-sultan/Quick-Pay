'use client'
import React from 'react'
import CTAButton from './CTAButton'
import Arrow from './Arrow'
import Image from 'next/image'
import ImageCarousel from './ImageCarousel'
import TopStrokes from './TopStrokes'

const CTA = () => {
  return (
    <section className='h-[500px]  bg-[#0083C7] mt-[60px]  relative w-full'>
        <section className="z-[100] relative flex p-[70px] pr-0 max-xmd:p-[20px] max-xsm:items-center max-xsm:justify-center h-full">
        <section className="max-xmd:flex max-xmd:flex-col justify-center items-center">
            <h3 className="text-white text-[50px] font-bold mb-[60px] max-sm:text-[30px] max-xmd:text-center">Download QuickPay App <br className="max-md:hidden"/> Now!!</h3>
               <CTAButton/>
            </section>
            <div className='absolute top-[55%] left-[33%] max-slg:top-[55%]  max-md:hidden'>
                <Arrow />
            </div>
            <section className="iphone-cta">
                <Image width={100} height={100} src="iPhone.svg" alt="" className="w-full" />
              </section>
        </section>
        <div className="w-full h-full absolute top-0">
         <TopStrokes/>
         </div>
         <div className="w-full h-full absolute top-0">
         <ImageCarousel/>
         </div>
    </section>
  )
}

export default CTA