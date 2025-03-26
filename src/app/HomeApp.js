//사용자 정의 컴포넌트
import TopBanner    from "../components/movie/TopBanner"
import Poster       from "../components/movie/Poster"
import PosterSlide  from "../components/movie/PosterSlide"

function HomeApp() {

  return (
    <>
    <TopBanner />
    <Poster />
    <PosterSlide />
    </>
  );
}

export default HomeApp;
