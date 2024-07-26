import React from 'react'
import team1 from '../../assets/img/gallery/team1.png'
import team2 from '../../assets/img/gallery/team2.png'
import team3 from '../../assets/img/gallery/team3.png'

const OurTeam = () => {
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
                        <a href="services.html" className="btn wantToWork-btn f-right">More Services</a>
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
                                    <span>Nutritionist</span>
                                    <h3><a href="#">John Sunsaev</a></h3>
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
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-team mb-30">
                            <div className="team-img">
                                <img src={team2} alt=""/>
                                <div className="team-caption">
                                    <span>Group fitness instructor</span>
                                    <h3><a href="#">Jacob Collier</a></h3>
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