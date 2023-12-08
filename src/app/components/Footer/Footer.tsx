import React from 'react';

const FooterColumn = ({ title, links }:{title: string,links: {url:string,label:string}[]}) => (
  <div className="col-span-1">
    {title && <span className="text-lg text-gray-800 font-bold">{title}</span>}
    <ul>
      {links.map((link, index) => (
        <li key={index} className="text-sm text-gray-600 mt-2 cursor-pointer font-semibold hover:text-blue-500">
          <a href={link.url}>{link.label}</a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const columns = [
    {
      title: 'Company',
      links: [
        { label: 'Home', url: '#' },
        { label: 'Features', url: '#' },
        { label: 'About Us', url: '#' },
        { label: 'How it works', url: '#' },
        { label: 'Contact Us', url: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help/FAQ', url: '#' },
        { label: 'Terms of Service', url: '#' },
        { label: 'Legal', url: '#' },
        { label: 'Privacy Policy', url: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-100 p-8 md:p-20">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="col-span-1 flex flex-col justify-start items-start">
          <img src="footerlogo.svg" alt="Footer Logo" className="mb-6" />
          <p className="text-sm text-gray-600">
            QuickPay is more than just a payment platform. We're here to simplify your financial journey, whether you're an individual or a business. Stay informed with our latest news, engage with us on social media, and be part of our growing community.
          </p>
          <div className="flex gap-4 mt-6">
            <img src="facebook.svg" alt="Facebook" />
            <img src="twitter.svg" alt="Twitter" />
            <img src="instagram.svg" alt="Instagram" />
          </div>
        </div>
        {columns.map((column, index) => (
          <FooterColumn key={index} title={column.title} links={column.links} />
        ))}
        <div className="col-span-1">
          <span className="text-lg text-gray-800 font-bold">Subscribe To Our Newsletter</span>
          <div className="flex mt-6 text-sm">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-3/4 md:w-96 h-12 p-4 bg-white text-gray-600 outline-none rounded-l-full"
            />
            <button className="w-1/4 md:w-[200px] font-bold h-12 bg-blue-500 text-white rounded-r-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 w-full h-px bg-gray-300"></div>
      <div className="w-full flex items-center justify-center pt-8">
        <span className="text-sm text-gray-600">Copyright 2023 All rights reserved QuickPay.com</span>
      </div>
    </footer>
  );
};

export default Footer;
