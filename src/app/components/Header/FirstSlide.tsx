import React from "react";
import CTAButton from "../CTA/CTAButton";
import Arrow from "../CTA/Arrow";
import Image from "next/image";
import ImageCarousel from "../CTA/ImageCarousel";

const FirstSlide = () => {
  return (
    <section className="h-[830px]  max-lg:h-[1300px]  max-xsm:h-[920px] bg-headergradient  relative w-full">
      <section className="z-[100] relative flex max-lg:flex-col  p-[72px]  lg:pr-0 max-xmd:p-[20px] items-center max-lg:justify-center h-full">
        <section className="flex flex-col text-white max-lg:justify-center max-lg:items-center max-md:text-center ">
          <span className="text-[32px] max-sm:text-[24px] mb-1">
            Simplifying Your Life
          </span>
          <h1 className=" text-[72px] font-bold mb-6 underline decoration-1 max-slg:text-[60px] max-sm:text-[36px] ">
            Pay Bills with Ease!
          </h1>
            <p className="lg:mb-[60px] mb-8 text-lg">
              Say goodbye to the hassle of paying bills. Our platform makes it
              quick and painless
            </p>
          <CTAButton
            button={[
              {
                img: "",
                text: "Get Started",
                title: "",
              },
              {
                img: "playstore.svg",
                text: "Google Play",
                title: "Get QuickPay on",
              },
            ]}
          />
        </section>
        <div className="absolute top-[55%] left-[33%] max-xl:top-[70%]  max-lg:hidden">
          <Arrow />
        </div>
        <section className="">
          <Image
            className="w-full"
            src={"header-first.svg"}
            width={0}
            height={0}
            alt="header-first"
          />
        </section>
      </section>
      <div className=" absolute left-[50%] max-slg:left-[45%] bottom-[42px] flex gap-4" >
        <div className="w-[25px] h-[25px] rounded-full bg-white"></div>
        <div className="w-[25px] h-[25px] rounded-full bg-[#073270]"></div>
      </div>
      <div className="absolute top-[192px] left-[40%] max-md:hidden">
      <Image className="w-full" width={0} height={0} src="stroke-4.svg" alt="stroke-4" />
      </div>
      <div>
        <ImageCarousel />
      </div>
    </section>
  );
};

export default FirstSlide;
