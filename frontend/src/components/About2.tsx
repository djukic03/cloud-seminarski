import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Qutaion from '../../assets/img/gallery/qutaion.png';
import About2png from '../../assets/img/gallery/about2.png';
import About3png from '../../assets/img/gallery/about3.png';
import About4png from '../../assets/img/gallery/about4.png';
import '../../assets/css/About2.css';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    img: About2png,
    text: "I've been using this app for six months, and it's been a great experience. The staff is friendly and knowledgeable, and the personal trainers are top-notch. The variety of classes is impressive, and the instructors are motivating and professional. I highly recommend this gym to anyone looking to improve their fitness.",
    name: "John Smith",
    title: "Basketball player"
  },
  {
    img: About4png,
    text: "As a tennis player, this gym has been perfect for my fitness needs. The equipment is excellent, helping me improve my strength and endurance. The staff is knowledgeable and supportive, providing great tips for my sport-specific training. The gym is always clean and well-organized. Highly recommend it to fellow athletes!",
    name: "Linda Sparrow",
    title: "Tennis player"
  },
  {
    img: About3png,
    text: "The gym offers a fantastic range of classes and the instructors are always motivating. I appreciate the clean environment and the modern equipment that supports my training routine. The friendly staff is always ready to help and provide guidance. This gym has everything I need to stay fit and healthy.",
    name: "Mike Tyson",
    title: "Boxer"
  }
];

const About2: React.FC = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="about-area2 testimonial-area section-padding30 fix">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-11 col-sm-11">
                    <div className="about-img2">
                        <TransitionGroup>
                            <CSSTransition key={index} timeout={2000} classNames="slides">
                                <img src={testimonials[index].img} alt="" />
                            </CSSTransition>
                        </TransitionGroup>
                        <div className="shape-qutaion d-none d-sm-block" style={{zIndex: '3'}}>
                            <img src={Qutaion} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-9 col-sm-9">
                    <div className="about-caption">
                        <div className="section-tittle mb-55">
                            <span>Client Feedback</span>
                            <h2>How our clients perceive us</h2>
                        </div>
                        <TransitionGroup>
                            <CSSTransition key={index} timeout={2000} classNames="slides">
                                <div className="single-testimonial">
                                    <div className="testimonial-caption">
                                        <p>{testimonials[index].text}</p>
                                        <div className="rattiong-caption">
                                            <span>{testimonials[index].name}<span>{testimonials[index].title}</span></span>
                                        </div>
                                    </div>
                                </div>
                            </CSSTransition>
                        </TransitionGroup>
                        <div className="buttons">
                            <button onClick={prevSlide}><FaChevronLeft/></button>
                            <button onClick={nextSlide}><FaChevronRight/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About2;
