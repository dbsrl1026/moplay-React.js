
//사용자 정의 컴포넌트

function TabCredits({ data }) {
  console.log("탭크레딧파람데이터", data);

    if (!data || data.length === 0) return <p>관련 데이터가 없습니다.</p>;

    return (
        <div className="movie-info-item">
            <strong>출연진:</strong>
           {/*  {movieInfo.credits?.cast.slice(0, 5).map(vv => (
                <li key={vv.id}>
                    {vv.profile_path && (
                        <img src={`https://image.tmdb.org/t/p/w200${vv.profile_path}`} alt={vv.name} width="50" />
                    )}
                    {vv.name} ({vv.character})
                </li>
            ))} */}
        </div>

    );
}
export default TabCredits;
