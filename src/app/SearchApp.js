//사용자 정의 컴포넌트
import Filter        from "../components/movie/Filter"
import PosterPaging  from "../components/movie/PosterPaging"

import {useState} from "react";

function SearchApp() {
  const [searchQuery, setSearchQuery] = useState("");   // 검색어
  const [filterOptions, setFilterOptions] = useState({  query: "" , sort: "", year: "", genre: ""});  //검색어 + 추가필터

  return (
    <>
        {/* Filter에서 검색어 입력 시 searchQuery 변경을 위한 setSearchQuery 함수 전달 */}
        <Filter setSearchQuery={setSearchQuery} setFilterOptions={setFilterOptions} />
            

        {/* searchQuery 전달 */}
        <PosterPaging 
                searchQuery={searchQuery}
                prmQuery={filterOptions.query} 
                prmSort={filterOptions.sort} 
                prmYear={filterOptions.year} 
                prmGenreId={filterOptions.genre} 
                prmGenreName={""} 
            />
        
    </>
  );
}

export default SearchApp;
