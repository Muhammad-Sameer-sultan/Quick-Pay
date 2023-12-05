import AboutUs from './components/About-us/AboutUs'
import Header from './components/Header/Header'
import MobileNav from './components/Navbar/MobileNav'
import Navbar from './components/Navbar/Navbar'
import BusinessGrid from './components/Offer/BusinessGrid'
import Offer from './components/Offer/Offer'
import Process from './components/Process/Process'

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
    </>
  )
}
