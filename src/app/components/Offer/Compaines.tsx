import Image from 'next/image';

const imageSlides = [
  ['company1.svg', 'company2.svg', 'company3.svg', 'company4.svg', 'company5.svg'],
  ['company6.svg', 'company7.svg', 'company8.svg', 'company9.svg', 'company10.svg'],
  ['company11.svg', 'company12.svg', 'company13.svg', 'company14.svg', 'company15.svg']
];

const Companies = () => (
  <section className="mt-[100px] max-xsm:mt-[50px]"> 
    <p className="text-center max-sm:text-base max-xsm:text-sm text-[#0083C7] mt-8 text-[24px] font-bold">
      500M+ Companies and Individuals simplify their payment with QuickPay
    </p>
    <section className="flex flex-col items-center justify-center mt-8 max-md:mt-0 max-md:h-[40px] relative h-24 z-10">
      {imageSlides.map((imageSlide, index) => (
        <section key={index} className={`company${index + 1} absolute flex gap-8 items-center max-sm:gap-4 max-xxsm:gap-0 max-w-[1008px] overflow-x-scroll`}>
          {imageSlide.map((item, subIndex) => (
            <div key={subIndex} className="relative z-10">
              <Image src={item} alt={item} width={150} height={150} />
            </div>
          ))}
        </section>
      ))}
    </section>
  </section>
);

export default Companies;
