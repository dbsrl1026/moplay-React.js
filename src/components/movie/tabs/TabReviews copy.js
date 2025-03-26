
// //사용자 정의 컴포넌트

// function TabReviews({ data }) {

//     const [movieInfo, setMovieInfo] = useState({});
//     //const API_KEY = "94e04bf9aba48bf25af91dd9af46da52";
//     const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;  

//     // 영화 데이터 가져오기
//     const getMovieInfo = async () =>{
//         const url = `https://api.themoviedb.org/3/movie/${movieId}?language=ko&region=KR&api_key=${API_KEY}`;
//         const response = await axios.get(url);
//         setMovieInfo(response.data);
//         console.log(response);
//     };
//     useEffect(
//         () => {
//             getMovieInfo();
//         }
//     , [movieId]);


//     // useEffect(() => {
//     //     fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
//     //     .then(response => {
//     //                 console.log("response:", response);
//     //                 response.json()
//     //          })
//     //     .then(data => setMovieInfo(data));
//     // }, [movieId]);
  
//   if (!movieId) return <div>영화정보 가져오기 실패, 잠시 후 다시 시도 하세요.</div>;

//     return (
//         <div>
//             영화상세정보 : {movieId}
                        
//                 {movieInfo.id} <br />
//                 {movieInfo.title}<br />
//                 <img width="100" height="100" src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`} alt={movieInfo.title} /> <br/>
//                 {movieInfo.poster_path} <br />
//                 {movieInfo.release_date} <br />
//                 {movieInfo.runtime} <br />
//                 {movieInfo.vote_average} <br />
//                 {movieInfo.overview} <br />
//                 {movieInfo.genres?.map((vv) => (
//                     <a key={vv.id} href={`/genre/${vv.id}`}>{vv.name}  </a>
//                 ))}
//             <hr />
           
//         </div>
//     );
// }

    

// export default TabReviews;
