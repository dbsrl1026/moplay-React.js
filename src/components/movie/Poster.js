//-------------------------------------------
// 111.영화 : 포스터 (기본형20개)
//-------------------------------------------

import {useEffect, useState} from "react";
import axios from "axios";

const Poster = () => {
    const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;  
    const [movies, setMovies] = useState([]);
    const url = `https://api.themoviedb.org/3/movie/popular?&language=ko&region=KR&api_key=${API_KEY}`;
    const initMovieList = async () => {
        const response = await axios.get(url);
        console.log(response);
        setMovies(response.data.results);
    }   
    useEffect( () => {
        console.log("URL:" + url);
        initMovieList();
    }, []); 

    console.log("URL:" + url);
    // const res = fetch(url) 
    //     .then(res => res.json())
    //     .then((data) => {setMovies(data.results)})
    //     .then(res => console.log(res))
    //     .catch(err => console.error(err));

    return (    
        <div className="movie-area pt-80">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="site-heading-inline">
                            <h2 className="site-title">영화목록</h2>
                            <a href="#!" className="theme-btn">View All<i className="far fa-angles-right"></i></a>
                        </div>
                    </div>
                </div>

                <div className="row row-cols-xl-5">
                    {
                        movies.map((vv) => (
                            <div key={vv.id} className="col-6 col-md-4 col-lg-3 col-xl">
                                <div className="movie-item">
                                    <span className="movie-quality">{vv.vote_average}♡♥</span>
                                    <div className="movie-img">
                                        <img src={`https://image.tmdb.org/t/p/w500${vv.poster_path}`} alt="{vv.title}" />
                                        <a href={`/detail/${vv.id}`} className="movie-play"><i className="icon-play-3"></i></a>
                                    </div>
                                    <div className="movie-content">
                                        <h6 className="movie-title"><a href="#!">{vv.title}</a></h6>
                                        <div className="movie-info">
                                            <span className="movie-time">{vv.release_date}</span>
                                            <div className="movie-genre">
                                                <a href="#!">Action,</a>
                                                <a href="#!">Fantasy</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }    
                </div>

            </div>
        </div>
    );
}

export default Poster;