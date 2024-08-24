import React from 'react'
import FooterBackgound from '../../assets/img/gallery/pexels-olly-3763870.jpg'
import Logo2 from '../../assets/img/logo/logo.png'
import { Link } from 'react-router-dom'
const Footer: React.FC = () => {
  return (
    <footer>
        <div className="footer-area section-bg" style={{backgroundImage: `url(${FooterBackgound})`}} >
            <div className="container">
                <div className="footer-top footer-padding">
                    <div className="row d-flex justify-content-between">
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-tittle">
                                    <h4>COMPANY</h4>
                                    <ul>
                                        <li><Link to="/about">About Us</Link></li>
                                        <li><Link to="/programs">Programs</Link></li>
                                        <li><Link to="/gallery"> Gallery</Link></li>
                                        <li><Link to="/contact"> Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-tittle">
                                    <h4>Some Of Our Programs</h4>
                                    <ul>
                                        <li><Link to={'/programs/football'}>Football</Link></li>
                                        <li><Link to={'/programs/tennis'}> Tennis</Link></li>
                                        <li><Link to={'/programs/basketball'}> Basketball</Link></li>
                                        <li><Link to={'/programs/boxing'}> Boxing</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-logo">
                                    <Link to="/"><img src={Logo2} alt=""/></Link>
                                </div>
                                <div className="footer-tittle">
                                    <div className="footer-pera">
                                        <p className="info1">We help you to elevate your fitness preformance to the pro level</p>
                                    </div>
                                </div>
                                <div className="footer-social ">
                                    <a href="https://www.facebook.com/sai4ull"><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fas fa-globe"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-12">
                            <div className="footer-copy-right text-center">
                                <p>
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This website is made by Milica Drljača 2022/0234 and Nemanja Đukić 2022/0129
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer