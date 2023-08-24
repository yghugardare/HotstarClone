import React from 'react'
import disney from './../assets/images/disney.png'
import marvel from './../assets/images/marvel.png'
import nationalG from './../assets/images/nationalG.png'
import pixar from './../assets/images/pixar.png'
import starwar from './../assets/images/starwar.png'

import disneyV from './../assets/videos/disney.mp4'
import marvelV from './../assets/videos/marvel.mp4'
import nationalGV from './../assets/videos/national-geographic.mp4'
import pixarV from './../assets/videos/pixar.mp4'
import starwarV from './../assets/videos/star-wars.mp4'

function ProductionHouse() {
    const productionHouse = [
        {id:1,image:disney,video:disneyV},
        {id:2 ,image : marvel  ,video:marvelV},
        {id:3,image:nationalG,video:nationalGV},
        {id:4,image:pixar,video:pixarV},
        {id:5,image:starwar,video:starwarV},
    ]
  return (
    <div className='flex gap-2 md:gap-5 py-1 px-2 md:px-14'>
        {
            productionHouse.map((item)=>(
                <div key={item.id} className='border-[2px] border-gray-600 shadow-2xl shadow-gray-800 rounded-lg relative transition-all duration-500 ease-in-out cursor-pointer hover:scale-110 '>
                    <video src={item.video} autoPlay loop playsInline className='absolute z-0 top-0 rounded-lg opacity-0 hover:opacity-80'/>
                    <img src={item.image} className='z-[100] w-full opacity-100'/>
                    
                </div>
            ))
        }
    </div>
  )
}

export default ProductionHouse