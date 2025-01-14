import React from 'react'

const Card = ({ name, title, img }) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 Card-card'>
      <div className='flex flex-col'>
        <img
          src={img}
          alt={name}
          className='w-full h-[200px] rounded-full'
        />
        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>{name}</h4>
          <p className='font-poppins font-normal text-[16px] leading-[24px] text-white'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
