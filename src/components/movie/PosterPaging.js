//-------------------------------------------
// 333.영화 : 포스터 (페이징)
//-------------------------------------------

import {useEffect, useState} from "react";
import axios from "axios";


const PosterPaging = ({ searchQuery, prmQuery,prmSort,prmYear,prmGenreId,prmGenreName }) => {
    

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalResults, setTotalResults] = useState(1);


    //장르
    //const [genreId, setGenreId]     = useState(prmGenreId);
    //const [genreName, setGenreName] = useState(prmGenreName);
    
    //페이징
    const startPage = Math.floor((page-1)/10) *10 + 1;
    const handlePageClick = (newPage) => {
        if(newPage>0 && newPage<=totalPages) {
            setPage(newPage);
        }
    };

    const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;  

    const initMovieList = async () => {
        const MAX_RESULTS = 300;
        const RESULTS_PER_PAGE = 20;
        const MAX_PAGE = Math.ceil(MAX_RESULTS / RESULTS_PER_PAGE); // 최대 15페이지
        const limitedPage = Math.min(page, MAX_PAGE);               // 15페이지까지만 요청
        
        var url = `https://api.themoviedb.org/3/movie/popular?&language=ko&region=KR&api_key=${API_KEY}&page=${limitedPage}`;
        
        // if (prmGenreId != null && prmGenreId !== "") {
        //     const genreQuery = `&with_genres=${prmGenreId}` 
        //     console.log("genreQuery" , genreQuery );
        //     url = `https://api.themoviedb.org/3/discover/movie?language=ko&region=KR&api_key=${API_KEY}&page=${limitedPage}${genreQuery}`;
        // } 
        // console.log(url);

        if (prmGenreId) {
            url = `https://api.themoviedb.org/3/discover/movie?language=ko&region=KR&api_key=${API_KEY}&page=${limitedPage}&with_genres=${prmGenreId}`;
        }

        // 검색어가 있을 경우 검색 API로 변경
        if (searchQuery) {
            url = `https://api.themoviedb.org/3/search/movie?language=ko&region=KR&api_key=${API_KEY}&page=${limitedPage}&query=${encodeURIComponent(searchQuery)}`;
            if (prmGenreId) url += `&with_genres=${prmGenreId}`;
            if (prmSort) url += `&sort_by=${prmSort}`;
            if (prmYear) url += `&primary_release_year=${prmYear}`;
        } else {
            url = `https://api.themoviedb.org/3/discover/movie?language=ko&region=KR&api_key=${API_KEY}&page=${limitedPage}`;
            if (prmGenreId) url += `&with_genres=${prmGenreId}`;
            if (prmSort) url += `&sort_by=${prmSort}`;
            if (prmYear) url += `&primary_release_year=${prmYear}`;
        }


        const response = await axios.get(url);
        console.log("응답url:", url);
        console.log("응답데이터:", response);
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
        setTotalResults(response.data.total_results);

    }   
    useEffect( () => {
        setMovies([]); // 기존 영화 목록 초기화
        initMovieList();
    }, [page, prmGenreId, prmSort, prmYear, searchQuery]); // 검색어
       
    return (    
        <div className="movie-area pt-80">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="site-heading-inline">
                            <h2 className="site-title">{prmGenreName} 영화목록 {totalResults}건</h2>
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
                                    <img src={`https://image.tmdb.org/t/p/w500${vv.poster_path}`} alt="{vv.title}"/>
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


               {/* pagination  ----------------------------------------------------------- --> */}
               <div className="pagination-area mt-30">
                    <div aria-label="Page navigation example">
                        <ul className="pagination">
                           {/*  <li className="page-item">
                                <a className="page-link" href="#!" aria-label="Previous">
                                    <span aria-hidden="true"><i className="fas fa-arrow-left"></i></span>
                                </a>
                            </li> */}
                            
                            {Array.from({ length: Math.min(10, totalPages - startPage + 1) }, (_, index) => {    
                                const pageNum = index + 1;
                                return (
                                    <li key={pageNum} className={`page-item ${page === pageNum ? "active" : ""}`}>
                                        <a className="page-link" href="#!" onClick={() => handlePageClick(pageNum)}>{pageNum}</a>
                                    </li>
                                );
                            })}
                            {/* <li className="page-item">
                                <a className="page-link" href="#!" aria-label="Next">
                                    <span aria-hidden="true"><i className="fas fa-arrow-right"></i></span>
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
                {/* pagination end --> */}

            </div>
        </div>
    );
}

export default PosterPaging;