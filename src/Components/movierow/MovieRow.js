import React from 'react';

const MovieRow = ({title, items}) => {
  return(
    <div>
      <h1>{title}</h1>
      <div>
        {
          items.results.map(result => (
      
              <img src={`https://image.tmdb.org/t/p/w300${result.poster_path}`} alt={result.original_name} />

         ))
        }
      </div>
    </div>
  )
}

export default MovieRow;