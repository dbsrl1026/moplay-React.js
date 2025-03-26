import React from "react";

const Register = () => {
    return (    
        <div className="auth-area py-100">
            <div className="container">
                <div className="col-md-5 col-lg-4 mx-auto">
                    <div className="auth-wrap">
                        <div className="auth-header">
                            <img src="assets/img/logo/logo.png" className="logo-dark-mode" alt="" />
                            <img src="assets/img/logo/logo-dark.png" className="logo-light-mode" alt="" />
                            <p>moplay 회원 가입</p>
                        </div>
                        <div className="auth-form">
                            <form action="#">
                                <div className="form-group">
                                    <label>이름</label>
                                    <input type="text" className="form-control" placeholder="이름을 입력하세요" />
                                </div>
                                <div className="form-group">
                                    <label>이메일</label>
                                    <input type="email" className="form-control" placeholder="이메일을 입력하세요" />
                                </div>
                                <div className="form-group">
                                    <label>비밀번호</label>
                                    <input type="password" className="form-control" placeholder="비밀번호를 입력하세요" />
                                </div>
                                <div className="auth-check">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="agree" />
                                        <label className="form-check-label" for="agree">
                                           <a href="#!">약관동의</a>
                                        </label>
                                    </div>
                                </div>
                                <div className="auth-btn">
                                    <button type="submit" className="theme-btn"><span className="far fa-paper-plane"></span>회원가입</button>
                                </div>
                            </form>
                            <div className="auth-footer">
                                <div className="auth-social">
                                    <span className="auth-divider">or</span>
                                    <div className="auth-social-list">
                                        <a href="#!" className="auth-gl"><i className="fab fa-google"></i>Google</a>
                                        <a href="#!" className="auth-fb"><i className="fab fa-facebook-f"></i>Facebook</a>
                                        <a href="#!" className="auth-tw"><i className="fab fa-x-twitter"></i>Twitter</a>
                                    </div>
                                </div>
                                <p>이미 계정이 있으세요? <a href="/login">로그인</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Register;



