import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/MovieContext';

function MovieCard({movie}){
    const {isFavorite,removeFromFavorites, addToFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id);
    function onFavClick(e){
      e.preventDefault()
      if(favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie);
    }
     return(
        <>
         <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img>
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite? "active" : ""}`} onClick={onFavClick}> {favorite ? "❤️" : "🤍"}</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
                <p className="movie-overview">{movie.overview}</p>
            </div>
         </div>
        </>
     );
}

export default MovieCard;