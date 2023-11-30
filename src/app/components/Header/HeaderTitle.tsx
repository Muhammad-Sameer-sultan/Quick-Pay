import {useState,useEffect} from 'react'

const HeaderTitle = () => {
    const [firstTitle, setFirstTitle] = useState(true);
    const [secondTitle, setSecondTitle] = useState(false);
  
    const showTitle = () => {
      setFirstTitle(!firstTitle);
      setSecondTitle(!secondTitle);
    };
    useEffect(() => {
        const interval= setInterval(showTitle,5000)
    
      return () => {
        clearInterval(interval)
      }
    }, [])
    


  return (
    <section className='max-lg:text-center'>
    {firstTitle && <div>
        <h1 className=" text-[72px] font-bold mb-6 underline decoration-1 max-slg:text-[60px] max-sm:text-[36px] ">Instant Recharge</h1>
            <p className="lg:mb-[60px] mb-8 text-lg">Top up your mobile airtime instantly, anytime, anywhere. Stay connected effortlessly</p>
      
    </div>

    }
      {secondTitle && <div>
        <h1 className=" text-[72px] font-bold mb-6 underline decoration-1 max-slg:text-[60px] max-sm:text-[36px]">Subscribe Easily</h1>
            <p className="lg:mb-[60px] mb-8 text-lg">Unlock the Benefits of Hassle-free Subscriptions. Join QuickPay Today</p>
        
    </div>

    }   
    </section>
  )
}

export default HeaderTitle