
//사용자 정의 컴포넌트

function TabVideos({ data }) {
  console.log("탭비디오파람데이터", data);

    if (!data || data.length === 0) return <p>관련 데이터가 없습니다.</p>;

    return (
        <div> 리뷰 탭 <br />
            <ul>
                {data.map(review => (
                    <li key={review.id}>
                        <strong>{review.author}:</strong> {review.content}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default TabVideos;
