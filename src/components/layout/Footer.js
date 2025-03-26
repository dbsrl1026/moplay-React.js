import React from "react";

const Footer = () => {
    return (
        <footer className="footer-area">
        
        <div className="copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 align-self-center">
                        <p className="copyright-text">
                            &copy; Copyright <span id="date"></span> <a href="#!"> moplay </a> All Rights Reserved.
                        </p>
                    </div>
                    <div className="col-md-6 align-self-center">
                        <ul className="footer-social">
                            <li><a href="#!"><i className="fab fa-square-facebook"></i></a></li>
                            <li><a href="#!"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="#!"><i className="fab fa-vimeo-v"></i></a></li>
                            <li><a href="#!"><i className="fab fa-tiktok"></i></a></li>
                            <li><a href="#!"><i className="fab fa-vk"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
                
    );
}

export default Footer;