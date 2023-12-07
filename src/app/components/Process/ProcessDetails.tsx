"use client";

import { motion } from "framer-motion";

const ProcessDetails = () => {
  const sections = [
    {
      imgSrc: "processline1.svg",
      circleSrc: "circle1.svg",
      title: "Choose Your Service Description",
      description:
        "Pick from a wide array of services, whether it's utility bills, airtime top-ups, or more.",
      delay: 0.2,
    },
    {
      imgSrc: "processline2.svg",
      circleSrc: "circle2.svg",
      title: "Enter Details Description",
      description:
        "Fill in essential information like your account details, phone number, and the amount to recharge or pay.",
      delay: 0.4,
    },
    {
      imgSrc: "processline3.svg",
      circleSrc: "circle3.svg",
      title: "Review & Confirm Description",
      description:
        "Carefully double-check your inputs, and with a simple tap, confirm your transaction.",
      delay: 0.6,
    },
    {
      imgSrc: "processline4.svg",
      circleSrc: "circle4.svg",
      title: "Instant Confirmation Description",
      description:
        "Get immediate confirmation of your payment or recharge - quick, easy, and hassle-free!",
      delay: 0.8,
    },
  ];

  return (
    <section className="flex flex-col gap-[35px] mt-6">
      {sections.map((section, index) => (
        <AnimatedSection key={index} {...section} index={index} />
      ))}
    </section>
  );
};

export default ProcessDetails;

const AnimatedSection = ({
  imgSrc,
  circleSrc,
  title,
  description,
  delay,
  index,
}: any) => {
  const fadeIn = (direction: string, delay: number) => {
    return {
      hidden: {
        y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
        x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 1.2,
          delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };

  const divVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const motionDivProps = {
    initial: index === 0 ? { opacity: 1 } : { opacity: 0 },
    whileInView: { opacity: 1, transition: { duration: 1.2, delay, ease: [0.25, 0.25, 0.25, 0.75], type: 'tween' } },
    viewport: { once: false, amount: delay },
  };

  return (
    <section className={`${index % 2 === 0 ? "" : "justify-end"} flex relative`}>
      <motion.div
        className='bg-white py-[48px] px-8 max-xmd:px-4 flex gap-[40px] max-xmd:gap-[20px] rounded-[20px] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(0,69,165,0.2)] w-[50%] max-md:w-full'
        variants={divVariants}
        {...motionDivProps}
      >
        <div>
          <img src={circleSrc} alt="img" />
        </div>
        <div>
          <p className='font-bold mb-[14px] text-[#333333]'>{title}</p>
          <p className='text-sm text-[#999999]'>{description}</p>
        </div>
      </motion.div>

      <motion.div
        variants={index === 0 ? fadeIn("up", delay) : divVariants}
        className={`absolute top-[100px]   ${index % 2 !== 0 ? "right-[50%]":"left-[50%]"}  max-lg:hidden  `}
        {...motionDivProps}
      >
        <img src={imgSrc} alt="" />
      </motion.div>
    </section>
  );
};


// Your main component
