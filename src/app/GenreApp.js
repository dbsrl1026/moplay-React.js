
//사용자 정의 컴포넌트
import PosterPaging  from "../components/movie/PosterPaging"
import { useParams } from "react-router-dom";


function GenreApp() {
  const {prmGenreId, prmGenreName} = useParams();
  console.log("prmGenreId : " + prmGenreId + "," + prmGenreName);

  return (
      <PosterPaging prmGenreId={prmGenreId}  prmGenreName={prmGenreName}/>
  );
}

export default GenreApp;
