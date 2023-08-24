import React, { useEffect, useRef, useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import GlobalApi from '../Services/GlobalApi'
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;
function Slider() {
    const [movieList,setMovieList] = useState([]);
    const elementRef = useRef();
    useEffect(()=>{
        getTrendingMovies()
    },[])
    // function to get movies
    const getTrendingMovies =()=>{ GlobalApi.getTrendingVideos.then(
        resp=>{setMovieList(resp.data.results); 
            // console.log(resp.data.results);
        }
    )
    }
    // function for scrolling left and right
    function slideLeft(element){
        element.scrollLeft -= screenWidth - 110
    }
    function slideRight(element){
        element.scrollLeft += screenWidth - 110
    }
  return (
    <div>
        <HiChevronLeft onClick={()=>slideLeft(elementRef.current)} className="hidden md:block text-[30px] absolute mt-[155px] mx-8 cursor-pointer text-white"/>
        <HiChevronRight onClick={()=>{slideRight(elementRef.current)}} className="hidden md:block text-[30px] absolute mt-[155px] mx-8 cursor-pointer right-0 text-white"/>
        <div ref={elementRef} className='scroll-smooth flex overflow-x-auto w-full py-4 px-6 md:px-14 scrollbar-hide'>
            {
                movieList.map((items,index)=>(
                    <img key={index} src={IMAGE_BASE_URL+items.backdrop_path} alt={items.original_name} 
                    className='min-w-full border-[4px] border-transparent  md:h-[310px] object-cover object-right-top  mr-4 rounded-lg cursor-pointer hover:border-gray-300 transition-all ease-in duration-200'
                    />
                ))
            }

        </div>
    </div>
  )
}

export default Slider