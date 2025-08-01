import React, { useState } from 'react'
import data from '../data.json'
import { Link } from 'react-router-dom'
import './Movies.css' // ✅ add this line

function Movies() {
  const [movies] = useState(data)


  return (
    <div className="movies-container">
      <h1 className="movies-heading">🎞️ Movie List</h1>
      <hr />
      <div className="movie-grid">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="movie-card">
              <Link to={`/movie/${movie.id}`} className="movie-link">
                <h3>{movie.title}</h3>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Movies




// import React, { useState } from 'react'
// import data from '../data.json'
// import { Link } from 'react-router-dom'

// function Movies() {
//   const [movies, setMovie] = useState(data)

//   return (
//     <div>
//       <h1>Movies</h1>
//       <hr />
//       {movies.map((movie) => {
//         return (
//           <div key={movie.id}>
           
//            <Link to={`/movie/${movie.id}`}> <p>{movie.title}</p> </Link>
//             <p>{movie.release_date}</p>
//             <hr />
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default Movies
