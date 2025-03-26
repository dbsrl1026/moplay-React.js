import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_KEY = "94e04bf9aba48bf25af91dd9af46da52";
const GENRE_URL = "https://api.themoviedb.org/3/genre/movie/list";  // 장르 리스트 API

const Header = () => {

    const [genres, setGenres] = useState([]);

    /** TMDB 장르 코드리스트 가져오기 */
    const getGenreList = async () => {
        try {
            const response = await axios.get(`${GENRE_URL}?api_key=${API_KEY}&language=ko`);
            setGenres(response.data.genres); 
        } catch (error) {
            console.error("TMDB 장르 코드리스트 가져오기 에러:", error);
        }
    };

    useEffect(() => {
        getGenreList();  //마운트 시 장르 코드리스트 가져오기 1회
    }, []);

    /** 장르 목록을 3컬럼으로 나누기 */
    const makeGenreMenu = (arr, numColumns) => {
        const columns = Array.from({ length: numColumns }, () => []);
        arr.forEach((item, index) => {
            columns[index % numColumns].push(item);
        });
        return columns;
    };
    const genreMenu = makeGenreMenu(genres, 3);


    return (
        <header className="header">
            <div className="main-navigation">
                <nav className="navbar navbar-expand-lg">
                    <div className="container position-relative">
                        <a className="navbar-brand" href="/">
                            <img src="/assets/img/logo/logo.png" className="logo-dark-mode" alt="logo" />
                            <img src="/assets/img/logo/logo-dark.png" className="logo-light-mode" alt="logo" />
                        </a>
                        <div className="mobile-menu-right">
                            <div className="nav-search-wrap">
                                <div className="search-btn">
                                    <button type="button" className="nav-right-link search-box-outer"><i className="icon-search"></i></button>
                                </div>

                                
                               {/*  영화검색--> */}
                               <div className="filter-search">
                                    <form action="#">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Enter keywords..." />
                                            <button type="button"><i className="icon-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                                {/* 영화검색 */}


                            </div>
                            <div className="color-mode theme-mode-control">
                                <button type="button" className="nav-right-link light-btn"><i className="icon-sun"></i></button>
                                <button type="button" className="nav-right-link dark-btn"><i className="icon-moon-2"></i></button>
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-mobile-icon"><i className="icon-menu-2"></i></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="main_nav">
                            <ul className="navbar-nav">
                                <li className="nav-item live"><a className="nav-link" href="/">Home</a></li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#!" data-bs-toggle="dropdown">영화</a>
                                    <ul className="dropdown-menu fade-down">
                                        <li><a className="dropdown-item" href="/movie">최신 영화</a></li>
                                        <li><a className="dropdown-item" href="/search">영화 검색</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#!" data-bs-toggle="dropdown">장르별</a>
                                    <div className="dropdown-menu mega-menu fade-down">
                                        
                                        {/* TMDB 장르 코드리스트 가져오기 : 장르 목록을 3컬럼으로 생성 */}
                                        <div className="row">
                                        {genreMenu.map((column, colIndex) => (
                                            <div key={colIndex} className="col-lg-4">
                                                {column.map((genre) => (
                                                    <Link key={genre.id} className="dropdown-item" to={`/genre/${genre.id}/${genre.name}`}>
                                                        {genre.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        ))}
                                        </div>



                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#!" data-bs-toggle="dropdown">Tv Shows</a>
                                    <ul className="dropdown-menu fade-down">
                                        <li><a className="dropdown-item" href="tv-show.html">준비중</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item live"><a className="nav-link" href="live.html"><i className="fad fa-circle-dot animated infinite fadeIn"></i> Live</a></li>
                            </ul>
                            <div className="nav-right">
                            <div className="nav-search-wrap">
                                    <form action="#">
                                            <input type="text" className="form-control" placeholder="영화검색" />
                                            <button type="button" className="nav-right-link search-box-outer"><i className="icon-search"></i></button>
                                    </form>
                            </div>
                              
                                <div className="nav-right-btn">
                                    <a href="/login" className="theme-btn"><i className="far fa-sign-in"></i> 로그인</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;