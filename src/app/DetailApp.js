//사용자 정의 컴포넌트
import DetailInfo   from "../components/movie/DetailInfo"
import TabInfo      from "../components/movie/TabInfo"
import { useParams } from "react-router-dom";

function DetailApp() {
  const {prmMovieId} = useParams();
  console.log("prmMovieId : " + prmMovieId);

  return (
    <div className="movie-single py-80">
        <div className="container">
            <div className="movie-single-wrap">
              <DetailInfo prmMovieId={prmMovieId}/>
              <TabInfo    prmMovieId={prmMovieId}/>
          </div>
        </div>
    </div>
  );
}

export default DetailApp;
