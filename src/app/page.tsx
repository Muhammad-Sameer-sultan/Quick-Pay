import { Content } from 'next/font/google'
import AboutUs from './components/About-us/AboutUs'
import CTA from './components/CTA/CTA'
import Header from './components/Header/Header'
import MobileNav from './components/Navbar/MobileNav'
import Navbar from './components/Navbar/Navbar'
import BusinessGrid from './components/Offer/BusinessGrid'
import Offer from './components/Offer/Offer'
import Process from './components/Process/Process'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
    <>
   <Navbar />
   <MobileNav />
   <Header />
   <Offer />
   <BusinessGrid />
   <AboutUs />
   <Process /> 
   <Testimonials />
   <CTA />
   <Contact />
   <Footer />
    </>
  )
}
