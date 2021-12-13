import React, { useState, useEffect } from 'react';
import GetHomeList from './tmdb/TMDB';

import MovieRow from './Components/movierow/MovieRow';


const App = () => {
  const [movielist, setMovielist] = useState([]);
  useEffect(() => {
    const loadLists = async () => {
      const lists = await GetHomeList();
      setMovielist(lists);
      console.log(lists)
    }
    loadLists();
  }, []);

  return(
    <div>
      {
        movielist.map(({title, id, items, ...moreProps}) => (
          <MovieRow key={id} title={title} items={items} />
        ))
      }
    </div>
  )
}

export default App;