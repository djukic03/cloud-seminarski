import React from 'react'
import about from '../../assets/img/gallery/about.png'
import { Link } from 'react-router-dom'

const About: React.FC = () => {
  return (
    <section className="about-area section-padding30">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-img ">
                            <img src={about} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-caption">
                            <div className="section-tittle section-tittle3 mb-35">
                                <span>ABOUT OUR APP</span>
                                <h2>Your Ultimate Destination for Sports-Specific Workout Programs and Tracking</h2>
                            </div>
                                <p className="mb-65 pera-bottom">At Athlete X, we offer tailored workout programs for a variety of sports, including basketball, tennis, football, gym, street workout, and more. Our comprehensive workout tracker allows you to monitor your progress by logging reps, sets, and weights, helping you stay on track and achieve your fitness goals. Join us and take your training to the next level!</p>
                            <Link to="/login" className="btn">become a member</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default About