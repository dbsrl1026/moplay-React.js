//디자인 css

//라우터
import {BrowserRouter, Routes, Route} from "react-router-dom";

//사용자 정의 컴포넌트 : 레이아웃
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

//사용자정의 컴포넌트
import HomeApp    from "./HomeApp";
import MovieApp   from "./MovieApp";
import SearchApp  from "./SearchApp";
import DetailApp  from "./DetailApp";
import GenreApp   from "./GenreApp";


import Login      from "../components/login/Login";
import Register   from "../components/login/Register";

 function App() {

   return (
      <BrowserRouter>
        {/* 레이아웃공통: 헤더 */}
        <Header />

         {/* 라우터설정 */}
         <Routes>
            <Route path="/"                                 element={<HomeApp />}   /> 
            <Route path="/movie"                            element={<MovieApp/>}   /> 
            <Route path="/search"                           element={<SearchApp/>}  /> 

            <Route path="/genre/:prmGenreId/:prmGenreName"  element={<GenreApp />}   /> 
            <Route path="/detail/:prmMovieId"               element={<DetailApp/>}  /> 
            <Route path="/login"                            element={<Login/>}      /> 
            <Route path="/register"                         element={<Register/>}   /> 

         </Routes>

        {/* 레이아웃공통: 푸터 */}
        <Footer />
      </BrowserRouter>
   );

 }
export default App;
