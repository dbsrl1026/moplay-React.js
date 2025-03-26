import React from "react";
import {useState} from "react";

const Filter = ({ setSearchQuery, setFilterOptions }) => {
    //검색조건 : 검색어, 개봉년도, 장르, 정렬조건
    const [inputValue, setInputValue] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [selectedSort, setSelectedSort] = useState("");



    const handleInputChange = (e) => {
        console.log("검색어입력")
        setInputValue(e.target.value);
    };
    const handleSearch = () => {  // 부모 컴포넌트(SearchApp)의 상태 변경
        setSearchQuery(inputValue);
        setFilterOptions({ sort: selectedSort, year: selectedYear, genre: selectedGenre, query: inputValue });
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
        }
    };

    
    const handleFilterChange = (type, value) => {
        let updatedGenre = [...selectedGenre];
        let updatedYear = selectedYear;
        let updatedSort = selectedSort;

        if (type === "sort") updatedSort = value;
        if (type === "year") updatedYear = value;
        if (type === "genre") {
            if (updatedGenre.includes(value)) {
                updatedGenre = updatedGenre.filter((genre) => genre !== value);
            } else {
                updatedGenre.push(value);
            }
        }
        setSelectedSort(updatedSort);
        setSelectedYear(updatedYear);
        setSelectedGenre(updatedGenre);
        setFilterOptions({ sort: updatedSort, year: updatedYear, genre: updatedGenre.join(","), query: inputValue });
    };



    return (    
<>
{/* -------------------------------------------- 기본검색조건  : 검색어 입력만 기능 구현 */}
        <div className="filter-area">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-3">
                        <div className="filter-search">

                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="영화제목" 
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onKeyDown={handleKeyDown}
                                     />
                                
                                    <button type="button" onClick={handleSearch}><i className="icon-search"></i></button>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="filter-search">
                            <form action="#">
                                <div className="filter-sort">
                                    <div className="filter-select">
                                        <select className="nice-select select">
                                            <option value="">Type</option>
                                            <option value="1">Any</option>
                                            <option value="2">Movie</option>
                                            <option value="3">Tv Series</option>
                                        </select>
                                    </div>
                                    <div className="filter-select">
                                        <select className="nice-select select">
                                            <option value="">Quality</option>
                                            <option value="1">Any</option>
                                            <option value="2">HD</option>
                                            <option value="3">SD</option>
                                            <option value="4">TS</option>
                                            <option value="5">CAM</option>
                                            <option value="6">DVD</option>
                                        </select>
                                    </div>
                                    <div className="filter-select">
                                        <select className="nice-select select">
                                            <option value="">Rating</option>
                                            <option value="1">Any</option>
                                            <option value="2">From 9-10</option>
                                            <option value="3">From 8-9</option>
                                            <option value="4">From 7-8</option>
                                            <option value="5">From 6-7</option>
                                            <option value="6">From 5-6</option>
                                        </select>
                                    </div>
                                    <div className="filter-select">
                                        <select className="nice-select select">
                                            <option value="">Sort By</option>
                                            <option value="2">Trending</option>
                                            <option value="1">Latest Movie</option>
                                            <option value="4">Most Watched</option>
                                            <option value="3">IMDB Rate</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="filter-btn text-end">
                            <button type="button" className="theme-btn" data-bs-toggle="collapse" data-bs-target="#collapseFilter" aria-expanded="false" aria-controls="collapseFilter"><span className="fas fa-sort"></span>검색조건 더보기</button>
                        </div>
                    </div>
                </div>
	 


                <div className="col-lg-12">
                    <div className="filter-full-wrap">
                        <div className="collapse" id="collapseFilter">
                            <div className="filter-full-content">

                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-12">
                                        <div className="filter-item">
                                            <h4>Sort By</h4>
                                            <div className="filter-item-content">
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" name="sort" value="popularity.desc" onChange={() => handleFilterChange("sort", "popularity.desc")} />
                                                    <label className="form-check-label">Popularity</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" name="sort" value="release_date.desc" onChange={() => handleFilterChange("sort", "release_date.desc")} />
                                                    <label className="form-check-label">Latest</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="checkbox" name="sort" value="vote_average.desc" onChange={() => handleFilterChange("sort", "vote_average.desc")} />
                                                    <label className="form-check-label">IMDB Rate</label>
                                                </div>
                                            </div>
                                        </div>
                                        </div>


			{/*----- 4. 필터 펼치기 : form : Release Year -----------> */}
                                        <div className="col-lg-12">
                                            <div className="filter-item">
                                                <h4>Release Year</h4>
                                                <div className="filter-item-content">
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" name="year" value="2023" onChange={() => handleFilterChange("year", "2023")} />
                                                        <label className="form-check-label">2024</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" name="year" value="2023" onChange={() => handleFilterChange("year", "2023")} />
                                                        <label className="form-check-label">2023</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" name="year" value="2022" onChange={() => handleFilterChange("year", "2022")} />
                                                        <label className="form-check-label">2022</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" name="year" value="2022" onChange={() => handleFilterChange("year", "2022")} />
                                                        <label className="form-check-label">2021</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

			{/*----- 4. 필터 펼치기 : form : Genre -----------> */}
                                        <div className="col-lg-12">
                                            <div className="filter-item">
                                                <h4>Genre</h4>
                                                <div className="filter-item-content">
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" name="genre" value="28" onChange={() => handleFilterChange("genre", "28")} />
                                                        <label className="form-check-label">액션</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" name="genre" value="16" onChange={() => handleFilterChange("genre", "16")} />
                                                        <label className="form-check-label">애니메이션</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" name="genre" value="16" onChange={() => handleFilterChange("genre", "35")} />
                                                        <label className="form-check-label">코미디</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" name="genre" value="16" onChange={() => handleFilterChange("genre", "27")} />
                                                        <label className="form-check-label">공포</label>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

			{/*----- 5. 필터 펼치기 : form : Country -----------> */}
                                        <div className="col-lg-12">
                                            <div className="filter-item">
                                                <h4>Country</h4>
                                                <div className="filter-item-content">
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" name="country" id="country1" value="1"/>
                                                        <label className="form-check-label" htmlFor="country1">Any Country</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" name="country" id="country8" value="8"/>
                                                        <label className="form-check-label" htmlFor="country8">China</label>
                                                    </div>
                                                   
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" name="country" id="country17" value="17"/>
                                                        <label className="form-check-label" htmlFor="country17">Italy</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" name="country" id="country18" value="18"/>
                                                        <label className="form-check-label" htmlFor="country18">Japan</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" name="country" id="country23" value="23"/>
                                                        <label className="form-check-label" htmlFor="country23">Romania</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" name="country" id="country24" value="24"/>
                                                        <label className="form-check-label" htmlFor="country24">Russia</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" name="country" id="country25" value="25"/>
                                                        <label className="form-check-label" htmlFor="country25">Spain</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" name="country" id="country26" value="26"/>
                                                        <label className="form-check-label" htmlFor="country26">Thailand</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" name="country" id="country27" value="27"/>
                                                        <label className="form-check-label" htmlFor="country27">UK</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="checkbox" name="country" id="country28" value="28"/>
                                                        <label className="form-check-label" htmlFor="country28">USA</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="text-center">
                                                <button type="button"  onClick={handleSearch} className="theme-btn"><span className="fas fa-sort"></span>검색</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        



        



</>
    );
}

export default Filter;        