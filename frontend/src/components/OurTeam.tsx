import React from 'react'
import team1 from '../../assets/img/gallery/team1.png'
import team2 from '../../assets/img/gallery/team2.png'
import team3 from '../../assets/img/gallery/team3.png'
import { Link } from 'react-router-dom'

const OurTeam: React.FC = () => {
  return (
    <>
    <section className="wantToWork-area w-padding">
            <div className="container">
                <div className="row align-items-end justify-content-between">
                    <div className="col-lg-6 col-md-9 col-sm-9">
                        <div className="section-tittle">
                            <span>oUR TEAM MeMBERS</span>
                            <h2>Our Most Exprienced Trainers</h2>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-3">
                        <Link to="/about" className="btn wantToWork-btn f-right">More About Us</Link>
                    </div>
                </div>
            </div>
        </section>
        <div className="team-area pb-150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-team mb-30">
                            <div className="team-img">
                                <img src={team1} alt=""/>
                                <div className="team-caption">
                                    <span>Basketball and Gym Coach</span>
                                    <h3><a>Немања Ђукић</a></h3>
                                    <div className="team-social">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fas fa-globe"></i></a></li>
                                            <li><a href="https://www.instagram.com/djukic_n/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-team mb-30">
                            <div className="team-img">
                                <img src={team2} alt=""/>
                                <div className="team-caption">
                                    <span>Tennis and StreetWorkout Coach</span>
                                    <h3><a>Милица Дрљача</a></h3>
                                    <div className="team-social">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fas fa-globe"></i></a></li>
                                            <li><a href="#"><i className="fab fa-discord"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-team mb-30">
                            <div className="team-img">
                                <img src={team3} alt=""/>
                                <div className="team-caption">
                                    <span>Strength and conditioning coach</span>
                                    <h3><a href="#">Phill Hudson</a></h3>
                                    <div className="team-social">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fas fa-globe"></i></a></li>
                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default OurTeam