import React, { useEffect, useRef } from "react";

const PosterScroll = ({ movies, setPage, loading, hasMore  }) => {
    const loadMoreRef = useRef(null);

    // IntersectionObserver로 스크롤 감지
    useEffect(() => {
        if (!loadMoreRef.current || !hasMore) return; // 더 불러올 데이터가 없으면 실행하지 않음

        const observerCallback = (entries) => {
            if (entries[0].isIntersecting && !loading) {
                setPage((prevPage) => prevPage + 1); // 페이지 증가
                console.log("=====게시물 15rows 불러오기======")
            }
        };

        const observer = new IntersectionObserver(observerCallback, { threshold: 1.0 });
        observer.observe(loadMoreRef.current);

        return () => observer.disconnect();
    }, [loading, hasMore]);

    return (
        <div className="movie-area pt-30">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="site-heading-inline">
                            <h2 className="site-title">이달의 신작 무비</h2>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-xl-5">
                    {movies.map((movie, index) => (
                        <div key={index} className="col-6 col-md-4 col-lg-3 col-xl">
                            <div className="movie-item">
                                <span className="movie-quality">★ {movie.vote_average.toFixed(1)}</span>
                                <div className="movie-img">
                                    <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                                    <a href={`/movie_detail/${movie.id}`} className="movie-play">
                                        <i className="icon-play-3"></i>
                                    </a>
                                </div>
                                <div className="movie-content">
                                    <h6 className="movie-title">
                                        <a href="#!">{movie.title}</a>
                                    </h6>
                                    <div className="movie-info">
                                        <span className="movie-time">{movie.release_date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* 감지 요소: 스크롤 도달 시 페이지 증가 */}
                {hasMore && <div ref={loadMoreRef} style={{ height: "50px", backgroundColor: "red" }}></div>}

            </div>
        </div>
    );
};

export default PosterScroll;
