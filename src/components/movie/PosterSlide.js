import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./PosterSlide.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 5 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 5 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 3 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};


const PosterSlide = () => {
  return (
    <div className="movie-area pt-80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="site-heading-inline">
              <h2 className="site-title">Trending Movies</h2>
              <a href="#!" className="theme-btn">
                View All<i className="far fa-angles-right"></i>
              </a>
            </div>
          </div>
        </div>

        {/* react-multi-carousel 적용 */}
        <Carousel
          responsive={responsive}
          infinite={true}   // 무한 루프
          autoPlay={false}  // 자동 재생 비활성화
          arrows={true}     // 좌우 화살표 표시
        //   customLeftArrow={<CustomLeftArrow />}
        //   customRightArrow={<CustomRightArrow />}
        >

        {Array.from({ length: 10 }).map((_, index) => (

            <div key={index} className="movie-item movie-item-slide">
            <span className="movie-quality">HD</span>
            <div className="movie-img">
                <img src="assets/img/movie/15.jpg" alt="" />
                <a href="/detail" className="movie-play"><i className="icon-play-3"></i></a>
            </div>
            <div className="movie-content">
                <h6 className="movie-title"><a href="/detaill">Frozen 2</a></h6>
                <div className="movie-info">
                    <span className="movie-time">2h 10min</span>
                    <div className="movie-genre">
                        <a href="#">Action,</a>
                        <a href="#">Fantasy</a>
                    </div>
                </div>
            </div>
            </div>

        ))}

          
          
        </Carousel>
      </div>
    </div>
  );
};

export default PosterSlide;
