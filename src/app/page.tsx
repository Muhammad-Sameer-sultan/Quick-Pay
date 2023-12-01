import Header from './components/Header/Header'
import MobileNav from './components/Navbar/MobileNav'
import Navbar from './components/Navbar/Navbar'
import Offer from './components/Offer/Offer'

export default function Home() {
  return (
    <>
   <Navbar />
   <MobileNav />
   <Header />
   <Offer />
    </>
  )
}
