import MovieCard from "../components/MovieCard";
import {useState, useEffect} from "react";
import '../css/Home.css';
import {searchMovies, getPopularMovies} from "../services/api"


function Home() {
    const [searchQuery, setSearchQuery] = useState(""); 
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const loadPopularMovies = async() => {
            try {
                const popularMovies  = await getPopularMovies()
                setMovie(popularMovies)
            } catch (error) {
                console.log("Error fetching popular movies", error)
                setError("Failed");
            }finally{
                setLoading(false)
            }
        }
        loadPopularMovies();
    }, []) 
    

    const handleSearch = async (e) => {
         e.preventDefault()
         if(!searchQuery.trim()) return
         if(loading) return

         setLoading(true)

         try {
            const searchResults  = await searchMovies(searchQuery);
            setMovie(searchResults)
            setError(null)
         } catch (error) {
            console.log(error)
            setError("Failed to Search")
         }finally{
            setLoading(false)
         }
         setSearchQuery("");
    }
    return (
        <>
            <div className="home">
                <form onSubmit={handleSearch} className="search-form">
                    <input type="text" placeholder="search for movies..." className="search-input" value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    >
                    </input>
                    <button type="submit" className="search-button">Search</button>
                </form>
                {error && <div className="error-message">{error}</div>}
                {loading? <div className="loading">Loading... </div> :
                <div className="movies-grid">
                    {movie.map((movie) => 
                    <MovieCard movie={movie} key={movie.id} ></MovieCard>)};
                </div>
                }
                
            </div>
        </>
    );

}

export default Home