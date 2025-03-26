

const TabInfo = ()=>{
    return (
        
          <div className="movie-comment mt-50">
           <ul className="nav nav-underline mb-3" id="movieComment-tab" role="tablist">
               <li className="nav-item" role="presentation">
                 <button className="nav-link active" id="movieComment-tab1" data-bs-toggle="pill" data-bs-target="#pills-movieComment1" type="button" role="tab" aria-controls="pills-movieComment1" aria-selected="true">Comments <span>05</span></button>
               </li>
               <li className="nav-item" role="presentation">
                 <button className="nav-link" id="movieComment-tab2" data-bs-toggle="pill" data-bs-target="#pills-movieComment2" type="button" role="tab" aria-controls="pills-movieComment2" aria-selected="false">Reviews <span>08</span></button>
               </li>
           </ul>



           <div className="tab-content" id="movieComment-tabContent">

                {/* <!------------------- movie comment : 탭1 : Comments ------- --> */}
               <div className="tab-pane fade show active" id="pills-movieComment1" role="tabpanel" aria-labelledby="movieComment-tab1" tabIndex="0">
                   <div className="movie-comment-wrap">
                    
                       <div className="comment-list">

                           {/* 댓글 */}
                           <div className="comment-item">
                               <div className="comment-img">
                                   <img src="assets/img/blog/com-1.jpg" alt="thumb" />
                               </div>
                               <div className="comment-content">
                                   <div className="comment-author">
                                       <div className="author-info">
                                           <h5>홍길동</h5>
                                           <span><i className="far fa-clock"></i>July 04, 2023, 10.30PM</span>
                                       </div>
                                   </div>
                                   <div className="comment-text">
                                       <p>댓글제목댓글제목댓글제목댓글제목댓글제목댓글제목댓글제목</p>
                                   </div>
                                   <div className="comment-action">
                                       <a href="#"><i className="far fa-reply"></i>Reply</a>
                                       <a href="#"><i className="far fa-thumbs-up"></i>15</a>
                                       <a href="#"><i className="far fa-thumbs-down"></i>4</a>
                                   </div>
                               </div>
                           </div>
                           {/* 댓글 - 댓글*/}
                           <div className="comment-item comment-reply">
                               <div className="comment-img">
                                   <img src="assets/img/blog/com-2.jpg" alt="thumb" />
                               </div>
                               <div className="comment-content">
                                   <div className="comment-author">
                                       <div className="author-info">
                                           <h5>아무개</h5>
                                           <span><i className="far fa-clock"></i>July 04, 2023, 10.30PM</span>
                                       </div>
                                   </div>
                                   <div className="comment-text">
                                       <p>댓글-댓글 댓글-댓글  댓글-댓글 댓글-댓글 댓글-댓글 댓글-댓글 </p>
                                   </div>
                                   <div className="comment-action">
                                       <a href="#"><i className="far fa-reply"></i>Reply</a>
                                       <a href="#"><i className="far fa-thumbs-up"></i>2.5k</a>
                                       <a href="#"><i className="far fa-thumbs-down"></i>1.2k</a>
                                   </div>
                               </div>
                           </div>
                           
                       </div>
                       <div className="text-center">
                           <a href="#" className="theme-btn"><span className="fas fa-rotate-left"></span>더보기...</a>
                       </div>
                      
                      {/*  <!-- comment form --> */}
                       <div className="comment-form">
                           <h4>댓글달기</h4>
                           <form action="#">
                               <div className="row">
                                   <div className="col-md-6">
                                       <div className="form-group">
                                           <input type="text" className="form-control" placeholder="이름*" />
                                       </div>
                                   </div>
                                   <div className="col-md-6">
                                       <div className="form-group">
                                           <input type="email" className="form-control" placeholder="이메일" />
                                       </div>
                                   </div>
                                   <div className="col-md-12">
                                       <div className="form-group">
                                           <textarea className="form-control" rows="5" placeholder="내용*"></textarea>
                                       </div>
                                       <button type="submit" className="theme-btn">댓글저장<i className="far fa-paper-plane"></i></button>
                                   </div>
                               </div>
                           </form>
                       </div>
                   </div>
               </div>

{/* <!------------------- movie comment : 탭2 : Reviews ------- --> */}
               <div className="tab-pane fade" id="pills-movieComment2" role="tabpanel" aria-labelledby="movieComment-tab2" tabIndex="0">
                   <div className="movie-comment-wrap">
                       {/* <!-- review list --> */}
                       <div className="comment-list">

                           {/* 댓글 */}
                           <div className="comment-item">
                               <div className="comment-img">
                                   <img src="assets/img/blog/com-1.jpg" alt="thumb" />
                               </div>
                               <div className="comment-content">
                                   <div className="comment-author">
                                       <div className="author-info">
                                           <h5>코스타</h5>
                                           <span><i className="far fa-clock"></i>July 04, 2023, 10.30PM</span>
                                       </div>

                                       <div className="author-rating">
                                           <i className="fas fa-star"></i>
                                           <span>평점 : 9.0</span>
                                       </div>
                                   </div>
                                   <div className="comment-text">
                                       <p>이건제목 이건제목</p>
                                   </div>
                                   <div className="comment-action">
                                       <a href="#"><i className="far fa-reply"></i>Reply</a>
                                       <a href="#"><i className="far fa-thumbs-up"></i>2.5k</a>
                                       <a href="#"><i className="far fa-thumbs-down"></i>1.2k</a>
                                   </div>
                               </div>
                           </div>
                           {/* 댓글 - 댓글*/}
                           <div className="comment-item comment-reply">
                               <div className="comment-img">
                                   <img src="assets/img/blog/com-2.jpg" alt="thumb" />
                               </div>
                               <div className="comment-content">
                                   <div className="comment-author">
                                       <div className="author-info">
                                           <h5>홍길동</h5>
                                           <span><i className="far fa-clock"></i>July 04, 2023, 10.30PM</span>
                                       </div>
                                       <div className="author-rating">
                                           <i className="fas fa-star"></i>
                                           <span>9.0</span>
                                       </div>
                                   </div>
                                   <div className="comment-text">
                                       <p>댓글-댓글 댓글-댓글 댓글-댓글 댓글-댓글 댓글-댓글 </p>
                                   </div>
                                   <div className="comment-action">
                                       <a href="#"><i className="far fa-reply"></i>Reply</a>
                                       <a href="#"><i className="far fa-thumbs-up"></i>2.5k</a>
                                       <a href="#"><i className="far fa-thumbs-down"></i>1.2k</a>
                                   </div>
                               </div>
                           </div>
                           
                       </div>
                       <div className="text-center">
                           <a href="#" className="theme-btn"><span className="fas fa-rotate-left"></span>더보기...</a>
                       </div>


                      {/*  <!-- review form ----------------------------------- --> */}
                       <div className="comment-form">
                           <h4>영화 리뷰 작성</h4>
                           <form action="#">
                               <div className="row">
                                   <div className="col-md-4">
                                       <div className="form-group">
                                           <select className="nice-select select">
                                               <option value="#">평가점수</option>
                                               <option value="10">10</option>
                                               <option value="09">09</option>
                                               <option value="08">08</option>
                                               <option value="07">07</option>
                                               <option value="06">06</option>
                                               <option value="05">05</option>
                                               <option value="04">04</option>
                                               <option value="03">03</option>
                                               <option value="02">02</option>
                                               <option value="01">01</option>
                                           </select>
                                       </div>
                                   </div>
                                   <div className="col-md-4">
                                       <div className="form-group">
                                           <input type="text" className="form-control" placeholder="이름" />
                                       </div>
                                   </div>
                                   <div className="col-md-4">
                                       <div className="form-group">
                                           <input type="email" className="form-control" placeholder="이메일"/>
                                       </div>
                                   </div>
                                   <div className="col-md-12">
                                       <div className="form-group">
                                           <textarea className="form-control" rows="5" placeholder="리뷰를 작성해 주세요"></textarea>
                                       </div>
                                       <button type="submit" className="theme-btn">리뷰저장 <i className="far fa-paper-plane"></i></button>
                                   </div>
                               </div>
                           </form>
                       </div>
                   </div>
               </div>
           </div>
       </div>

    );
}
export default TabInfo;