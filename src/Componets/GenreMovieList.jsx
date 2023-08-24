import React from 'react'
import GenreList from './../Constant/GenreList'
import MovieList from './MovieList'

function GenreMovieList() {
  return (
    <div>
      {
        GenreList.genere.map((item,index)=>(
          index<5 &&<div className="text-white py-1 md:py-8 px-8 md:px-16">
            <h2 className="text-[20px] font-bold">{item.name}</h2>
            <MovieList  key={index} genreId={item.id}/>
          </div>
        ))
      }
    </div>
  )
}

export default GenreMovieList