//---------------------------------------
// 영화 상세정보
//---------------------------------------
import {useEffect, useState} from "react";
import axios from "axios";

const DetailInfo = ({prmMovieId}) => {

        //영화아이디
        const [movieId, setMovieId] = useState(prmMovieId);
        const [movieInfo, setMovieInfo] = useState({});
        const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;  
    
        // 영화 데이터 가져오기
        const getMovieInfo = async () =>{
            const url = `https://api.themoviedb.org/3/movie/${movieId}?language=ko&region=KR&api_key=${API_KEY}&append_to_response=credits,keywords`;
            const response = await axios.get(url);
            setMovieInfo(response.data);
            console.log(response);
        };
        useEffect(
            () => {
                getMovieInfo();
            }
        , [prmMovieId]);


    // useEffect(() => {
    //     fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
    //     .then(response => {
    //                 console.log("response:", response);
    //                 response.json()
    //          })
    //     .then(data => setMovieInfo(data));
    // }, [movieId]);

    return (    
        <div className="movie-single-content mt-20">
            <div className="row">
                <div className="col-md-4 col-lg-3">
                    <div className="movie-img">
                        <img src={`https://image.tmdb.org/t/p/original/${movieInfo.poster_path}`} alt={movieInfo.title} /> <br/>
                    </div>
                </div>
                <div className="col-md-8 col-lg-6 border-end">
                    <div className="movie-info">
                        <h4 className="movie-name">
                            {movieInfo.title}
                            <a href="https://www.youtube.com/watch?v=ckHzmP1evNU" className="theme-btn popup-youtube"><span className="fas fa-video"></span>Trailer</a>
                        </h4>
                        <p>
                        {movieInfo.overview}
                        </p>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <div className="movie-info-item">
                                    <strong>장르:</strong>
                                    {movieInfo.genres?.map((vv) => (
                                        <a key={vv.id} href={`/genre/${vv.id}/${vv.name}`}>{vv.name},</a>
                                    ))}
                                </div>
                                <div className="movie-info-item">
                                    <strong>감독:</strong>
                                    {
                                        (() => {
                                            const director = movieInfo.credits?.crew.find(person => person.job === "Director");
                                            return director ? <p>{director.name}</p> : <p>감독 정보 없음</p>;
                                        })()
                                    }
                                </div>
                                <div className="movie-info-item">
                                    <strong>출연진:</strong>
                                    {movieInfo.credits?.cast.slice(0, 5).map(vv => (
                                        <li key={vv.id}>
                                            {vv.name} ({vv.character})
                                        </li>
                                    ))}
                                </div>
                                <div className="movie-info-item">
                                    <strong>국가:</strong>
                                    {movieInfo.origin_country?.length ? movieInfo.origin_country.join(", ") : ""}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="movie-info-item">
                                    <strong>상영시간:</strong>
                                    <span>{movieInfo.runtime}</span>
                                </div>
                                <div className="movie-info-item">
                                    <strong>해상도:</strong>
                                    <span className="quality">HD</span>
                                </div>
                                <div className="movie-info-item">
                                    <strong>개봉년도:</strong>
                                    <a href="#">{movieInfo.release_date}</a>
                                </div>
                                <div className="movie-info-item">
                                    <strong>영화평점:</strong>
                                    <span className="rating">{movieInfo.vote_average}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-7 col-lg-3">
                    <div className="movie-download">
                        <h5>Download:</h5>
                        <a href="#" className="theme-btn"><span className="fas fa-arrow-down-to-arc"></span>Download: 576p</a>
                        <a href="#" className="theme-btn"><span className="fas fa-arrow-down-to-arc"></span>Download: 720p</a>
                        <a href="#" className="theme-btn"><span className="fas fa-arrow-down-to-arc"></span>Download: 1080p</a>
                    </div>
                </div>
                <div className="col-12">
                    <div className="movie-keyword">
                        <span>Keywords:</span>
                        {movieInfo.keywords?.keywords?.map(vv => (
                            <a href="#" key={vv.id}>#{vv.name} </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailInfo;