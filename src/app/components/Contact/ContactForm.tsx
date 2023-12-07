import React from "react";
import ContactButton from "./ContactButton";

const ContactForm = () => {
  return (
    <section className="py-[62px] px-[42px] max-xsm:px-5 bg-white rounded-[20px] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(0,69,165,0.2)] max-xlg:max-w-[500px] xsm:min-w-[350px]">
    <form>
       <h4 className="text-[#333333] font-bold text-[20px] mb-6 max-xsm:text-center">Send Us A  Message</h4>
      <div className="flex gap-8 max-slg:flex-col">
          <div className="flex flex-col gap-3 text-sm" >
                <label className="text-[#3A3A3A] font-semibold">Name</label>
                <input type="text" 
                placeholder="Alogbe Rachael" 
                className="text-[#999999] w-[250px] h-[40px] py-3 px-[18px] border border-[#796E6E] rounded-[4px] outline-none focus:border-[#0045A5] focus:border-2 max-xlg:w-full"
                
                />
           </div>
           <div className="flex flex-col gap-3 text-sm" >
                <label className="text-[#3A3A3A] font-semibold">Email</label>
                <input type="email" 
                placeholder="john@gmail.com" 
                className="text-[#999999] w-[250px] h-[40px] py-3 px-[18px] border border-[#796E6E] rounded-[4px] outline-none focus:border-[#0045A5] focus:border-2 max-xlg:w-full"
                
                />
           </div>
      </div>

       <ContactButton/>
    </form>
</section>
  );
};

export default ContactForm;
