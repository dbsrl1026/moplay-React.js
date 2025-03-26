import React, { useState, useEffect } from "react";
import axios from 'axios';

//사용자 정의 컴포넌트
import PosterScroll       from "../components/movie/PosterScroll"

const API_KEY = "94e04bf9aba48bf25af91dd9af46da52";
const BASE_URL = "https://api.themoviedb.org/3/discover/movie";


const MovieApp = () => {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [sortOrder, setSortOrder] = useState("popularity.desc");  //기본 인기도순
    //const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);                   // 더 불러올 데이터가 있는지 확인하는 상태

    const [query, setQuery] = useState('');

    //마운트 시 영화목록(인기,최신,추천순) 영화 출력
    const initMovieList = async () => {
        if (loading || !hasMore) return; // 이미 로딩 중이거나 더 이상 데이터가 없으면 실행하지 않음
        setLoading(true);
        
        try {
          //let genreQuery = selectedGenres.length > 0 ? `&with_genres=${selectedGenres.join(',')}` : '';
          let sortQuery = sortOrder === 'popularity' ? 'popularity.desc' :
                          sortOrder === 'latest' ? 'release_date.desc' :
                          sortOrder === 'recommended' ? 'vote_average.desc' : 'popularity.desc';
                   
        //https://api.themoviedb.org/3/discover/movie?api_key=94e04bf9aba48bf25af91dd9af46da52&language=ko&region=KR&sort_by=popularity.desc
          const url = `${BASE_URL}?api_key=${API_KEY}&language=ko&region=KR&sort_by=${sortQuery}&page=${page}`;  //${genreQuery}
          const response = await axios.get(url);

          
          const newMovies = response.data.results;
          setMovies((prevMovies) => [...prevMovies, ...newMovies]); // 기존 데이터 + 새 데이터 추가
          //더 이상 불러올 데이터가 없으면 hasMore을 false로 설정
          if (newMovies.length === 0) {
                setHasMore(false);
          }

        } catch (error) {
            console.error('마운트영화목록 API 에러:', error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        console.log("마운트영화목록 API")
        initMovieList(); 
    }, [page, sortOrder]); //페이지번호, 정렬 속성 변경 시 다시 가져오기

    
    return (    
        <>
            {/* <!-- 영화목록(2행*5열) --> */}
            <PosterScroll movies={movies} setPage={setPage} loading={loading} hasMore={hasMore} />
        </>
    );
}

export default MovieApp;

