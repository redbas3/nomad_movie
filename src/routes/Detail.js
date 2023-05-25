import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovice = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      )
    ).json();
    console.log(json);
    setMovie(json.data.movie);
  }

  useEffect(() => {
    getMovice();
    setLoading(false);
  }, []);


  return (
    <div>
      {loading ? <h1>Loading...</h1> :
        <div>
          <h1>{movie.title}</h1>
          <img src={movie.large_cover_image} alt={movie.title} />
          <p>{movie.description_full}</p>
        </div>
      }
    </div>
  )
}

export default Detail;