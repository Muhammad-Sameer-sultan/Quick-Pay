import React from "react";
import Arrow from "../CTA/Arrow";
import CTAButton from "../CTA/CTAButton";
import HeaderTitle from "./HeaderTitle";
import Image from "next/image";
import Floaters from "./Floaters";

const SecondSlide = () => {
    return (
      <section className='h-[830px]  max-lg:h-[1300px]  max-xsm:h-[920px] bg-headergradient  relative '>
          <section className="z-[100] relative flex max-lg:flex-col  p-[72px] xsm:h-full  lg:pr-0 max-xmd:p-[20px] items-center max-lg:justify-center  max-xsm:pt-[50px]">
                <section className="flex flex-col text-white max-lg:justify-center max-lg:items-center max-md:text-center">
                  <span className="text-[32px] max-sm:text-[24px] mb-1">Simplifying Your Life</span>
                   <HeaderTitle/>
  
                 <CTAButton button={[
                        {
                          img: '',
                          text: 'Get Started',
                          title:''
                        },
                        {
                          img: 'playstore.svg',
                          text: 'Google Play',
                          title: 'Get QuickPay on'
                        },
                ]} />
                </section>
                <div className="absolute top-[55%] left-[33%] max-xl:top-[70%]  max-lg:hidden ">
                <Arrow/>
                </div>
                <section className="absolute right-0 max-xl:static max-lg:w-[600px] max-sm:w-[400px] max-lg:mt-[100px] max-xsm:mt-7 max-xsm:w-[270px] max-lg:mb-6">
                    <div className='relative w-[600px] h-[600px] max-xslg:w-[500px] max-lg:w-[600px] max-sm:w-[400px] max-xsm:w-[250px]'> 
                    <Image width={0} height={0} src="shadow.svg" alt=""  className='w-full absolute top-0 handShadow max-lg:hidden'/>
                    <Image width={0} height={0} src="handphone.svg" alt="" className="w-[94%] max-xslg:left-[30px]  absolute left-[35px] top-[34px]" />
                     <Floaters />
                    <div className='relative'>
                      <button className='headerBtn'>
                            <Image width={0} height={0} src="recharge.svg" alt=""  className='w-auto rechargebtn headerBtnImg' />
                            <Image width={0} height={0} src="subscribe.svg" alt=""  className='w-auto subscribebtn headerBtnImg' />
                            
                      </button>
                    </div>
                    </div>
                </section>
  
  
  
          </section>
           <div className=" absolute left-[50%] max-slg:left-[45%] bottom-[42px] flex gap-4">
                 <div className="w-[25px] h-[25px] rounded-full bg-[#073270]"></div>
                 <div  className="w-[25px] h-[25px] rounded-full bg-white "></div>
              </div>
  
      </section>
    )
  }

export default SecondSlide;
