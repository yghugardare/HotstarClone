import { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

function MovieList({genreId}) {
  const [movieList,setMovieList] =useState([]);
  useEffect(()=>{
    getMovieByGenreId();
  },[])
  const elementRef = useRef(null);
  const getMovieByGenreId = ()=>{
    GlobalApi.getMovieByGenreId(genreId).then(
      resp=>{
        console.log(resp.data.results);
        setMovieList(resp.data.results);
      }
    )
  }
  function slideLeft(element){
    element.scrollLeft -=  500
}
function slideRight(element){
    element.scrollLeft += 500
} 
  return (
    <div className=" relative " >
      <HiChevronLeft onClick={()=>slideLeft(elementRef.current)} className="hidden md:block text-[36px] absolute mt-[140px] left-0 cursor-pointer text-white ml-[-35px]"/>
      <HiChevronRight onClick={()=>{slideRight(elementRef.current)}} className="hidden md:block text-[36px] absolute mt-[140px]  cursor-pointer right-0 text-white mr-[-35px]"/>
      <div ref={elementRef} className='py-4 scroll-smooth flex overflow-x-auto my-2 gap-2 scrollbar-hide md:gap-5' >
      {
        movieList.map((item,index)=>(
          <img key={index} src={IMAGE_BASE_URL+item.poster_path} className="w-[110px] md:w-[220px]  cursor-pointer  hover:border-[3px] border-gray-400 rounded-lg hover:scale-110 transition-all duration-150 ease-in'" />
        ))
      }
      </div>
      
    </div>
  )
}

export default MovieList