import React from "react";

const Profile = () => {
    return (    
        <div className="profile-area py-100">
            <div className="container">

	 {/*  <!-------------------------------------------------------------------------------------------------------------------------- -->			 */}
                <div className="profile-intro">
	       
                 {/*   <!------------------------------------------------------------ -->		 */}
                    <div className="row">
                        <div className="col-lg-4 col-xl-4">
                            <div className="intro-left">
                                <div className="intro-img">
                                    <img src="assets/img/account/01.jpg" alt="" />
                                </div>
                                <div className="intro-content">
                                    <h4>Annie J. Morin</h4>
                                    <p>Your ID: 123456</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-xl-8">
                            <div className="intro-right">
                                <div className="intro-item">
                                    <div className="intro-content">
                                        <h4 className="intro-amount">$79<span>/Month</span></h4>
                                        <p>Premium Plan</p>
                                    </div>
                                    <div className="intro-icon">
                                        <i className="icon-subscription"></i>
                                    </div>
                                </div>
                                <div className="intro-item">
                                    <div className="intro-content">
                                        <h4>20</h4>
                                        <p>Your Wishlist</p>
                                    </div>
                                    <div className="intro-icon">
                                        <i className="icon-computer-play-1"></i>
                                    </div>
                                </div>
                                <div className="intro-item">
                                    <div className="intro-content">
                                        <h4>$320</h4>
                                        <p>Your Balance</p>
                                    </div>
                                    <div className="intro-icon">
                                        <i className="icon-money-bag"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
	       {/* <!------------------------------------------------------------ -->			 */}
                    <div className="profile-menu">
                        <ul className="nav nav-underline" id="pills-profile-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                              <button className="nav-link active" id="pills-profile-tab1" data-bs-toggle="pill" data-bs-target="#pills-profile1" type="button" role="tab" aria-controls="pills-profile1" aria-selected="true">My Profile</button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="pills-profile-tab2" data-bs-toggle="pill" data-bs-target="#pills-profile2" type="button" role="tab" aria-controls="pills-profile2" aria-selected="false">My Wishlist</button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="pills-profile-tab3" data-bs-toggle="pill" data-bs-target="#pills-profile3" type="button" role="tab" aria-controls="pills-profile3" aria-selected="false">Notification <span className="badge">02</span></button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="pills-profile-tab4" data-bs-toggle="pill" data-bs-target="#pills-profile4" type="button" role="tab" aria-controls="pills-profile4" aria-selected="false">Settings</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-profile-tab5" data-bs-toggle="pill" data-bs-target="#pills-profile5" type="button" role="tab" aria-controls="pills-profile5" aria-selected="false">Topup Balance</button>
                            </li>
                            <li className="nav-item ms-auto" role="presentation">
                              <button className="nav-link" type="button"><i className="far fa-sign-out"></i>Sign Out</button>
                            </li>
                        </ul>
                    </div>
	      {/*  <!------------------------------------------------------------ --> */}
		
                </div>
               {/* <!-------------------------------------------------------------------------------------------------------------------------- -->		 */}


	{/* <!-------------------------------------------------------------------------------------------------------------------------- -->	 */}
                <div className="profile-menu-content">
                    

		<div className="tab-content" id="profile-pills-tabContent">
                        {/* <!-- tab 1 profile - ---------------------------------------------------------------------------------> */}
                        <div className="tab-pane fade show active" id="pills-profile1" role="tabpanel" aria-labelledby="pills-profile-tab1" tabindex="0">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="profile-menu-info">
                                        <div className="profile-details">
                                            <h4 className="title">Profile Info</h4>
                                            <table className="table table-borderless">
                                                <tr>
                                                    <th>Full Name</th>
                                                    <td>Annie J. Morin</td>
                                                </tr>
                                                <tr>
                                                    <th>Email</th>
                                                    <td><a href="https://live.themewild.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="9ff2f0edf6f1dffae7fef2eff3fab1fcf0f2">[email&#160;protected]</a></td>
                                                </tr>
                                                <tr>
                                                    <th>Phone</th>
                                                    <td>+2 123 4567 789</td>
                                                </tr>
                                                <tr>
                                                    <th>Moplay ID</th>
                                                    <td>123456</td>
                                                </tr>
                                                <tr>
                                                    <th>Join Date</th>
                                                    <td>August 25, 2023</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="profile-menu-info">
                                        <div className="profile-about">
                                            <h4 className="title">About Me</h4>
                                            <p className="mt-3">
                                                It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout. The point of using
                                                Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                                                opposed to using content here content here making it look like readable english.
                                            </p>
                                            <p className="mt-2">
                                                There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration in some form, by injected humour, or
                                                randomised words which don't look even slightly believable.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- tab 2  whislist ---------------------------------------------------------------------------------> */}
                        <div className="tab-pane fade" id="pills-profile2" role="tabpanel" aria-labelledby="pills-profile-tab2" tabindex="0">
                            <div className="row row-cols-xl-5">
                                <div className="col-6 col-md-4 col-lg-3 col-xl">
                                    <div className="movie-item">
                                        <span className="movie-quality">HD</span>
                                        <div className="movie-img">
                                            <img src="assets/img/movie/06.jpg" alt="" />
                                            <a href="#!" className="movie-play"><i className="icon-play-3"></i></a>
                                        </div>
                                        <div className="movie-content">
                                            <h6 className="movie-title"><a href="#!">Avatar 2</a></h6>
                                            <div className="movie-info">
                                                <span className="movie-time">2h 10min</span>
                                                <div className="movie-genre">
                                                    <a href="#!">Action,</a>
                                                    <a href="#!">Fantasy</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3 col-xl">
                                    <div className="movie-item">
                                        <span className="movie-quality">HD</span>
                                        <div className="movie-img">
                                            <img src="assets/img/movie/07.jpg" alt="" />
                                            <a href="#!" className="movie-play"><i className="icon-play-3"></i></a>
                                        </div>
                                        <div className="movie-content">
                                            <h6 className="movie-title"><a href="#!">Mission: Impossible - Dead Reckoning Part One</a></h6>
                                            <div className="movie-info">
                                                <span className="movie-time">2h 10min</span>
                                                <div className="movie-genre">
                                                    <a href="#!">Action,</a>
                                                    <a href="#!">Fantasy</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3 col-xl">
                                    <div className="movie-item">
                                        <span className="movie-episode">EPS<small>10</small></span>
                                        <span className="movie-quality">HD</span>
                                        <div className="movie-img">
                                            <img src="assets/img/movie/s1.jpg" alt="" />
                                            <a href="#!" className="movie-play"><i className="icon-play-3"></i></a>
                                        </div>
                                        <div className="movie-content">
                                            <h6 className="movie-title"><a href="#!">Loki</a></h6>
                                            <div className="movie-info">
                                                <span className="movie-season">Season 02</span>
                                                <div className="movie-genre">
                                                    <a href="#!">Action,</a>
                                                    <a href="#!">Fantasy</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3 col-xl">
                                    <div className="movie-item">
                                        <span className="movie-quality">CAM</span>
                                        <div className="movie-img">
                                            <img src="assets/img/movie/10.jpg" alt="" />
                                            <a href="#!" className="movie-play"><i className="icon-play-3"></i></a>
                                        </div>
                                        <div className="movie-content">
                                            <h6 className="movie-title"><a href="#!">Blue Beetle</a></h6>
                                            <div className="movie-info">
                                                <span className="movie-time">2h 10min</span>
                                                <div className="movie-genre">
                                                    <a href="#!">Action,</a>
                                                    <a href="#!">Fantasy</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3 col-xl">
                                    <div className="movie-item">
                                        <span className="movie-episode">EPS<small>10</small></span>
                                        <span className="movie-quality">HD</span>
                                        <div className="movie-img">
                                            <img src="assets/img/movie/s3.jpg" alt="" />
                                            <a href="#!" className="movie-play"><i className="icon-play-3"></i></a>
                                        </div>
                                        <div className="movie-content">
                                            <h6 className="movie-title"><a href="#!">Star Trek: Picard</a></h6>
                                            <div className="movie-info">
                                                <span className="movie-season">Season 03</span>
                                                <div className="movie-genre">
                                                    <a href="#!">Action,</a>
                                                    <a href="#!">Sci-Fi</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3 col-xl">
                                    <div className="movie-item">
                                        <span className="movie-quality">HD</span>
                                        <div className="movie-img">
                                            <img src="assets/img/movie/11.jpg" alt="" />
                                            <a href="#!" className="movie-play"><i className="icon-play-3"></i></a>
                                        </div>
                                        <div className="movie-content">
                                            <h6 className="movie-title"><a href="#!">Transformers Rise of The Beast</a></h6>
                                            <div className="movie-info">
                                                <span className="movie-time">2h 10min</span>
                                                <div className="movie-genre">
                                                    <a href="#!">Action,</a>
                                                    <a href="#!">Fantasy</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3 col-xl">
                                    <div className="movie-item">
                                        <span className="movie-episode">EPS<small>10</small></span>
                                        <span className="movie-quality">SD</span>
                                        <div className="movie-img">
                                            <img src="assets/img/movie/s7.jpg" alt="" />
                                            <a href="#!" className="movie-play"><i className="icon-play-3"></i></a>
                                        </div>
                                        <div className="movie-content">
                                            <h6 className="movie-title"><a href="#!">Fate: The Winx Saga</a></h6>
                                            <div className="movie-info">
                                                <span className="movie-season">Season 08</span>
                                                <div className="movie-genre">
                                                    <a href="#!">Action,</a>
                                                    <a href="#!">Fantasy</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3 col-xl">
                                    <div className="movie-item">
                                        <span className="movie-quality">CAM</span>
                                        <div className="movie-img">
                                            <img src="assets/img/movie/13.jpg" alt="" />
                                            <a href="#!" className="movie-play"><i className="icon-play-3"></i></a>
                                        </div>
                                        <div className="movie-content">
                                            <h6 className="movie-title"><a href="#!">How to Train Your Dragon 2</a></h6>
                                            <div className="movie-info">
                                                <span className="movie-time">2h 10min</span>
                                                <div className="movie-genre">
                                                    <a href="#!">Animation</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3 col-xl">
                                    <div className="movie-item">
                                        <span className="movie-quality">HD</span>
                                        <div className="movie-img">
                                            <img src="assets/img/movie/14.jpg" alt="" />
                                            <a href="#!" className="movie-play"><i className="icon-play-3"></i></a>
                                        </div>
                                        <div className="movie-content">
                                            <h6 className="movie-title"><a href="#!">Angry Birds 2</a></h6>
                                            <div className="movie-info">
                                                <span className="movie-time">2h 10min</span>
                                                <div className="movie-genre">
                                                    <a href="#!">Animation</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-4 col-lg-3 col-xl">
                                    <div className="movie-item">
                                        <span className="movie-episode">EPS<small>10</small></span>
                                        <span className="movie-quality">HD</span>
                                        <div className="movie-img">
                                            <img src="assets/img/movie/s10.jpg" alt="" />
                                            <a href="#!" className="movie-play"><i className="icon-play-3"></i></a>
                                        </div>
                                        <div className="movie-content">
                                            <h6 className="movie-title"><a href="#!">Lockwood and Co</a></h6>
                                            <div className="movie-info">
                                                <span className="movie-season">Season 01</span>
                                                <div className="movie-genre">
                                                    <a href="#!">Action,</a>
                                                    <a href="#!">Crime</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- pagination --> */}
                            <div className="pagination-area mt-30">
                                <div aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link" href="#!" aria-label="Previous">
                                                <span aria-hidden="true"><i className="fas fa-arrow-left"></i></span>
                                            </a>
                                        </li>
                                        <li className="page-item active"><a className="page-link" href="#!">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                        <li className="page-item"><span className="page-link">...</span></li>
                                        <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#!" aria-label="Next">
                                                <span aria-hidden="true"><i className="fas fa-arrow-right"></i></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- pagination end --> */}
                        </div>
                        {/* <!-- tab 3 notification ---------------------------------------------------------------------------------> */}
                        <div className="tab-pane fade" id="pills-profile3" role="tabpanel" aria-labelledby="pills-profile-tab3" tabindex="0">
                            <div className="profile-menu-info">
                                <div className="profile-notification">
                                    <h4 className="title">Notification</h4>
                                    <div className="table-responsive">
                                        <table className="table table-borderless">
                                            <thead>
                                                <tr>
                                                    <th>#No</th>
                                                    <th>Icon</th>
                                                    <th>Notification</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>01</td>
                                                    <td>
                                                        <span className="icon"><i className="far fa-bell"></i></span>
                                                    </td>
                                                    <td>
                                                        <p>It is a long established fact that a reader will be distracted.</p>
                                                    </td>
                                                    <td><span className="badge badge-success">Read</span></td>
                                                    <td>
                                                        <a href="#!" className="btn btn-sm btn-outline-secondary rounded-2"><i className="far fa-eye"></i></a>
                                                        <a href="#!" className="btn btn-sm btn-outline-danger rounded-2 ms-1"><i className="far fa-trash-can"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>02</td>
                                                    <td>
                                                        <span className="icon"><i className="far fa-bell"></i></span>
                                                    </td>
                                                    <td>
                                                        <p>It is a long established fact that a reader will be distracted.</p>
                                                    </td>
                                                    <td><span className="badge badge-danger">New</span></td>
                                                    <td>
                                                        <a href="#!" className="btn btn-sm btn-outline-secondary rounded-2"><i className="far fa-eye-slash"></i></a>
                                                        <a href="#!" className="btn btn-sm btn-outline-danger rounded-2 ms-1"><i className="far fa-trash-can"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>03</td>
                                                    <td>
                                                        <span className="icon"><i className="far fa-bell"></i></span>
                                                    </td>
                                                    <td>
                                                        <p>It is a long established fact that a reader will be distracted.</p>
                                                    </td>
                                                    <td><span className="badge badge-danger">New</span></td>
                                                    <td>
                                                        <a href="#!" className="btn btn-sm btn-outline-secondary rounded-2"><i className="far fa-eye-slash"></i></a>
                                                        <a href="#!" className="btn btn-sm btn-outline-danger rounded-2 ms-1"><i className="far fa-trash-can"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>04</td>
                                                    <td>
                                                        <span className="icon"><i className="far fa-bell"></i></span>
                                                    </td>
                                                    <td>
                                                        <p>It is a long established fact that a reader will be distracted.</p>
                                                    </td>
                                                    <td><span className="badge badge-danger">New</span></td>
                                                    <td>
                                                        <a href="#!" className="btn btn-sm btn-outline-secondary rounded-2"><i className="far fa-eye-slash"></i></a>
                                                        <a href="#!" className="btn btn-sm btn-outline-danger rounded-2 ms-1"><i className="far fa-trash-can"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>05</td>
                                                    <td>
                                                        <span className="icon"><i className="far fa-bell"></i></span>
                                                    </td>
                                                    <td>
                                                        <p>It is a long established fact that a reader will be distracted.</p>
                                                    </td>
                                                    <td><span className="badge badge-success">Read</span></td>
                                                    <td>
                                                        <a href="#!" className="btn btn-sm btn-outline-secondary rounded-2"><i className="far fa-eye"></i></a>
                                                        <a href="#!" className="btn btn-sm btn-outline-danger rounded-2 ms-1"><i className="far fa-trash-can"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>06</td>
                                                    <td>
                                                        <span className="icon"><i className="far fa-bell"></i></span>
                                                    </td>
                                                    <td>
                                                        <p>It is a long established fact that a reader will be distracted.</p>
                                                    </td>
                                                    <td><span className="badge badge-danger">New</span></td>
                                                    <td>
                                                        <a href="#!" className="btn btn-sm btn-outline-secondary rounded-2"><i className="far fa-eye-slash"></i></a>
                                                        <a href="#!" className="btn btn-sm btn-outline-danger rounded-2 ms-1"><i className="far fa-trash-can"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>07</td>
                                                    <td>
                                                        <span className="icon"><i className="far fa-bell"></i></span>
                                                    </td>
                                                    <td>
                                                        <p>It is a long established fact that a reader will be distracted.</p>
                                                    </td>
                                                    <td><span className="badge badge-danger">New</span></td>
                                                    <td>
                                                        <a href="#!" className="btn btn-sm btn-outline-secondary rounded-2"><i className="far fa-eye-slash"></i></a>
                                                        <a href="#!" className="btn btn-sm btn-outline-danger rounded-2 ms-1"><i className="far fa-trash-can"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>08</td>
                                                    <td>
                                                        <span className="icon"><i className="far fa-bell"></i></span>
                                                    </td>
                                                    <td>
                                                        <p>It is a long established fact that a reader will be distracted.</p>
                                                    </td>
                                                    <td><span className="badge badge-danger">New</span></td>
                                                    <td>
                                                        <a href="#!" className="btn btn-sm btn-outline-secondary rounded-2"><i className="far fa-eye-slash"></i></a>
                                                        <a href="#!" className="btn btn-sm btn-outline-danger rounded-2 ms-1"><i className="far fa-trash-can"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>09</td>
                                                    <td>
                                                        <span className="icon"><i className="far fa-bell"></i></span>
                                                    </td>
                                                    <td>
                                                        <p>It is a long established fact that a reader will be distracted.</p>
                                                    </td>
                                                    <td><span className="badge badge-success">Read</span></td>
                                                    <td>
                                                        <a href="#!" className="btn btn-sm btn-outline-secondary rounded-2"><i className="far fa-eye"></i></a>
                                                        <a href="#!" className="btn btn-sm btn-outline-danger rounded-2 ms-1"><i className="far fa-trash-can"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>
                                                        <span className="icon"><i className="far fa-bell"></i></span>
                                                    </td>
                                                    <td>
                                                        <p>It is a long established fact that a reader will be distracted.</p>
                                                    </td>
                                                    <td><span className="badge badge-danger">New</span></td>
                                                    <td>
                                                        <a href="#!" className="btn btn-sm btn-outline-secondary rounded-2"><i className="far fa-eye-slash"></i></a>
                                                        <a href="#!" className="btn btn-sm btn-outline-danger rounded-2 ms-1"><i className="far fa-trash-can"></i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                           {/*  <!-- pagination --> */}
                            <div className="pagination-area mt-40">
                                <div aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link" href="#!" aria-label="Previous">
                                                <span aria-hidden="true"><i className="fas fa-arrow-left"></i></span>
                                            </a>
                                        </li>
                                        <li className="page-item active"><a className="page-link" href="#!">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                        <li className="page-item"><span className="page-link">...</span></li>
                                        <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#!" aria-label="Next">
                                                <span aria-hidden="true"><i className="fas fa-arrow-right"></i></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                           {/*  <!-- pagination end --> */}
                        </div>

                        {/* <!-- tab 4 settings : 회원정보 수정 -----------------------------------------------------------------------------------> */}
                        <div className="tab-pane fade" id="pills-profile4" role="tabpanel" aria-labelledby="pills-profile-tab4" tabindex="0">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="profile-menu-info">
                                        <h4 className="title">Profile Info</h4>
                                        <div className="profile-form">
                                            <form action="#">
                                                <div className="profile-img">
                                                    <img src="assets/img/account/01.jpg" alt="" />
                                                    <button className="profile-file-btn" type="button"><i className="far fa-camera"></i></button>
                                                    <input type="file" className="profile-file-input" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>First Name</label>
                                                            <input type="text" className="form-control" value="Annie" placeholder="First Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Last Name</label>
                                                            <input type="text" className="form-control" value="J. Morin" placeholder="Last Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Email</label>
                                                            <input type="email" className="form-control" value="morin@example.com" placeholder="Your Email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Phone</label>
                                                            <input type="text" className="form-control" value="+2 123 4567 789" placeholder="Your Phone" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>About Me</label>
                                                            <textarea cols="30" rows="4" className="form-control" placeholder="Write About You">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <button className="theme-btn" type="submit"><span className="far fa-save"></span> Save Changes</button>
                                                    </div>
                                                </div>
                                            </form>    
                                        </div>                                        
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="profile-menu-info">
                                        <h4 className="title">Change Password</h4>
                                        <div className="profile-form">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Current Password</label>
                                                            <input type="password" className="form-control" placeholder="Current Password" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>New Password</label>
                                                            <input type="password" className="form-control" placeholder="New Password" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Confirm Password</label>
                                                            <input type="password" className="form-control" placeholder="Confirm Password" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <button className="theme-btn" type="submit"><span className="far fa-key"></span> Save Changes</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- tab 5 : 결제계좌입력 ---------------------------------------------------------------------------------> */}
                        <div className="tab-pane fade" id="pills-profile5" role="tabpanel" aria-labelledby="pills-profile-tab5" tabindex="0">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="profile-menu-info">
                                        <h4 className="title">Balance Summary</h4>
                                        <div className="row g-4">
                                            <div className="col-md-6 col-lg-12 col-xl-6">
                                                <div className="profile-balance-item">
                                                    <div className="profile-balance-info">
                                                        <h3>$250</h3>
                                                        <p>Current Balance</p>
                                                    </div>
                                                    <span className="icon"><i className="fal fa-wallet"></i></span>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-12 col-xl-6">
                                                <div className="profile-balance-item">
                                                    <div className="profile-balance-info">
                                                        <h3>$780</h3>
                                                        <p>Total Spend Amount</p>
                                                    </div>
                                                    <span className="icon"><i className="fal fa-sack-dollar"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="profile-menu-info">
                                        <h4 className="title">Topup Balance</h4>
                                        <div className="profile-form">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Topup Amount</label>
                                                            <input type="text" className="form-control" placeholder="Enter Amount" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="method" id="method1" checked />
                                                            <label className="form-check-label" for="method1">
                                                               Credit Card
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="method" id="method2" />
                                                            <label className="form-check-label" for="method2">
                                                                Paypal
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <button className="theme-btn" type="submit"><span className="far fa-wallet"></span> Topup</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    );
}

export default Profile;



