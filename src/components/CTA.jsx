import React from 'react'
import { image6bg } from '../assets'

const CTA = () => (
    <div id='wheretobuy' className='flex justify-center items-center w-full sm:h-[468px] h-[342px]  bg-[#FFD36A]'>
      
      <div className='flex flex-col justify-center items-center w-[470px] h-[268px]'>
        <h1 className='sm:w-[470px] w-[339px] h-[60px] sm:h-[92px] font-manrope font-bold sm:text-[42px] text-[26px] sm:leading-[46px] leading-[30px] text-center mb-[18px]'>Find a Crisps Store Near You</h1>
        <p className='sm:w-[470px] sm:h-[60px] w-[339px] h-[72px] font-manrope font-normal sm:text-[18px]  text-[14px] sm:leading-[30px] leading-[24px] text-center mb-[38px]'>Feel the best and awesome taste with Lays Crisps. There has been various kind of Crisps you can eat and feel.</p>
        <button className=' relative z-10 w-[159px] h-[60px] bg-primary rounded-[8px] font-manrope font-semibold text-[18px] leading-[30px] text-center text-white'>Find Store</button>
      </div>
      <img src={image6bg} alt='bg lays' className='w-full sm:h-[468px]  absolute z-0'/>
    </div>
  )


export default CTA