import React from 'react'
import Details from './details'

const product = () => (
    <div id="products" className='flex flex-col justify-center items-center sm:mt-[150px] mt-[100px]'>
      <div>
      <h1 className='font-manrope font-bold sm:text-[42px] sm:leading-[46px] text-center text-primary text-[30px] leading-[30px] sm:mb-5 mb-3'>Find Best Taste Here</h1>
      <p className='font-manrope font-normal text-[18px] leading-[30px] text-[#5D696D] sm:w-[570px] sm:h-[60px] w-[339px] h-[72px] sm:mb-[70px] mb-[38px] text-center'>Feel the best and awesome taste with Lays Crisps. There has been various kind of Crisps you can eat and feel</p>
      </div>
      <Details />

    </div>
  )

export default product