import React from 'react'
import data from '../data.json'
import { useParams } from 'react-router-dom'
import './Post.css' // ✅ CSS styling

function Post() {
  const param = useParams()
  const filterdata = data.filter((movie) => movie.id === param.movie_id)

  return (
    <div className="post-container">
      <h2 className="post-heading">🎬 Movie Detail Page</h2>

      {filterdata.map((movie) => {
        return (
          <div key={movie.id} className="movie-card">
            <img src={movie.image} alt={movie.title} className="movie-image" />
            <div className="movie-info">
              <h3 className="movie-title">{movie.title}</h3>
              <p><strong>Release Date:</strong> {movie.release_date}</p>
              <p><strong>Running Time:</strong> {movie.running_time} min</p>
              <p><strong>Director:</strong> {movie.director}</p>
              <p><strong>Producer:</strong> {movie.producer}</p>
              <p><strong>Rotten Tomatoes Score:</strong> {movie.rt_score} / 100</p>
              <p className="movie-description">
                {movie.description || "No description available."}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Post




// import React from 'react'
// import data from '../data.json'
// import { useParams } from 'react-router-dom'

// function Post() {
//   const param = useParams()
//   const filterdata = data.filter((movie) => movie.id === param.movie_id)

//   return (
//     <>
//       <h2>Movie Detail Page</h2>

//       {filterdata.map((movie) => {
//         return (
//           <div key={movie.id}>
//             <h3>{movie.title}</h3>
//             <p>Release Date: {movie.release_date}</p>
//             <p>Director: {movie.director}</p>
//             <img src={movie.image} alt="img" style={{ width: '300px' } }/>
//           </div>
//         )
//       })}
//     </>
//   )
// }

// export default Post
