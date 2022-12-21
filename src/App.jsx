import React from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header'
import Features from './components/Features';
import Product from './components/product'
import Videosection from './components/Videosection';
import Testimonial from './components/Testimonial';
import CTA from './components/CTA';
import Footer from'./components/Footer';

const App = () => {
  return (
    <div className='w-full bg-white overflow-hidden'>
      <div className='flex justify-center items-center'>
          <div className='xl:max-w-[1280px] w-full'>
          <Navbar />
          <Header />
          </div>
        </div>
          <div className='xl:max-w-[1280px] w-full sm:px-16 px-6 py-[150px]'>
          <Features />
          <Product />
          <Videosection />
          </div>
          <div className='flex justify-center items-center'>
          <div className='xl:max-w-[1280px] w-full'>
          <Testimonial />
          <CTA />
          <Footer />
          </div>
        </div>
        
    </div>
  )
}
export default App