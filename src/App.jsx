import React from 'react'
import ProductCard from './components/ProductCard' 


import React from 'react'
import ProductCard from './components/ProductCard' 

import bannerImg from './assets/banner.png'
import shirtImg from './assets/shirt.png'
import sweaterImg from './assets/sweater.png'
import blazerImg from './assets/blazer.png'

function App() {
  const products = [
    { id: 1, name: "SPREAD COLOR SHIRT", price: "2.500", img: shirtImg },
    { id: 2, name: "SILK AND LINEN SWEATER", price: "2.500", img: sweaterImg },
    { id: 3, name: "BLAZER WITH METAL BUTTONS", price: "2.500", img: blazerImg },
  ]

  
  return (
    <div className="min-h-screen bg-[#FEF7E6] overflow-x-hidden">
      <header className="bg-[#2A497D] h-auto min-h-[100px] md:h-[150px] pb-2 md:pb-0">
        <div className="px-2">
          <h1 className="font-inheritance flex justify-center w-full pt-[15px] md:pt-[25px] text-[14px] md:text-[32px] font-light text-[#FEF7E6] tracking-[2px] md:tracking-[5px]">
            A | T <span className="pl-[10px] md:pl-[25px] tracking-[5px] md:tracking-[15px] text-[#FEF7E6]">SIGNATURE</span>
          </h1>
        </div>

        <ul className='font-main text-[#FEF7E6] flex justify-center w-full pt-[15px] md:pt-[25px] text-[7px] md:text-[16px] font-light tracking-[1px] md:tracking-[5px] gap-[10px] md:gap-[90px] uppercase'>
          <li>READY TO WEAR</li> 
          <li>SHOES</li>
          <li>NEW ARRIVALS</li>
          <li>ACCESSORIES</li>
        </ul>
      </header> 

      <main className='font-main'>
        
        <div className="hidden md:block">
          <img src={bannerImg} alt="Banner" className='pt-[24px] pl-[15%] w-[1060px]' />
        </div>

      
        <div className='wear-cards grid grid-cols-3 md:flex gap-[5px] md:gap-[80px] px-2 md:px-0 mt-4 md:mt-0'>
          {products.map((product, index) => (
            <ProductCard 
              key={product.id}
              image={product.img}
              name={product.name}
              price={product.price}
              isFirst={index === 0} 
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App