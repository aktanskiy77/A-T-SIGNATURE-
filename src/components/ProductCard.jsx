import React from 'react'

const ProductCard = ({ image, name, price, isFirst = false }) => {
  return (
    <div className={`
      mt-[10px] md:mt-[24px] 
      text-[#FEF7E5] bg-[#2A497D] 
      w-full 
      h-auto pb-2 md:pb-0 md:h-[460px]
      ${isFirst ? 'md:ml-[15%]' : ''}
    `}>
      <img src={image} alt={name} className="w-full aspect-[3/4] object-cover" />
      <div className="pl-[4px] md:pl-[10px]">
        <p className='text-[8px] md:text-[16px] pt-[5px] md:pt-[10px] uppercase truncate leading-tight'>{name}</p>
        <p className='text-[9px] md:text-[16px] font-bold md:font-normal'>{price} SOM</p>
      </div>
    </div>
  )
}

export default ProductCard