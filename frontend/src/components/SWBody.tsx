import React, { Dispatch, SetStateAction, useEffect } from 'react'
import Schedule from './Schedule'
import BBHero from '../../assets/img/hero/sw_hero.jpg'
import BBall from '../../assets/img/gallery/sworkout.jpg';
import Pricing from './Pricing'
import Comments from './Comments';
import { Comment } from '../models/comment';
import { SchTab } from '../models/schtab';

const comments: Comment[] = [
    new Comment("Jacob Blunt","Great workout plan! I love it! It helped me to join my collage basketball team.","December 4, 2023 at 3:12 pm ", '../../assets/img/comment/comment_1.png'),
    new Comment("Alex Ferguson", "I love this program. 5 stars!", "December 4, 2023 at 3:12 pm ", '../../assets/img/comment/comment_2.png'),
    new Comment("John Doe", "I've been playing this program for 2 years. I can't wait to see where I can improve.", "December 4, 2023 at 3:12 pm ", '../../assets/img/comment/comment_3.png')
]

const tabs: SchTab[] = [
    new SchTab('Rest day', 'Full day','Немања Ђукић'),
    new SchTab('Cardio session', '8am - 10am','Немања Ђукић'),
    new SchTab('Rest', '10am - 5pm','Немања Ђукић'),
    new SchTab('Pull workout', '5pm - 6pm','Немања Ђукић'),
    new SchTab('Push workout', '5pm - 6pm','Jack Johnson'),
    new SchTab('Legs workout', '5pm - 6pm','Adam Smith'),
];

interface SWProps {
    setBoughtProgram: Dispatch<SetStateAction<{ name: string; price: string }>>;
}

const SWBody: React.FC<SWProps> = ({setBoughtProgram}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <main>
        <div className="slider-area2" style={{backgroundImage: `url(${BBHero})`}}>
            <div className="slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap hero-cap2 pt-70 text-center">
                                <h2>STREET WORKOUT</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="blog_area single-post-area" style={{paddingTop: '5%'}}>
        <div className="container">
            <div className="row justify-content-center" style={{width: '100%'}}>
               <div className="col-lg-10 posts-list">
                    <div className="single-post">
                        <div className="feature-img">
                            <img className="img-fluid" src={BBall} alt=""/>
                        </div>
                        <div className="blog_details">
                            <h2 style={{color: '#2d2d2d'}}>Defy Limits: Achieve Peak Performance with Our Street Workout Plan</h2>
                            <ul className="blog-info-link mt-3 mb-4">
                                <li><a href="#"><i className="fa fa-comments"></i> 03 Comments</a></li>
                            </ul>
                            <p className="excert">
                                Unlock your true potential with our street workout plan – a raw and powerful approach to fitness that uses nothing but your own bodyweight and the world around you. Whether you’re training in a park, on the beach, or in your backyard, this program is designed to help you build strength, agility, and endurance without the need for a gym. It’s perfect for those who want to stay fit, flexible, and strong while embracing the freedom and creativity of street workouts
                            </p>
                            <p>
                                Our street workout plan is all about mastering control over your own body. With a focus on calisthenics, you'll perform exercises that challenge multiple muscle groups simultaneously, enhancing functional strength and improving overall athleticism. From pull-ups and push-ups to advanced moves like muscle-ups and human flags, this plan gradually progresses to help you conquer even the most challenging exercises. Each session is a full-body workout, designed to build lean muscle and burn fat.
                            </p>
                            <div className="quote-wrapper">
                                <div className="quotes">
                                    <p>
                                        This street workout plan has completely redefined my approach to fitness. I've gained strength, agility, and a new sense of freedom in my workouts. The progression of exercises is perfect, and the ability to train anywhere has made it easy to stay consistent. I never imagined I could achieve these results without a gym, but here I am, stronger and more confident than ever
                                    </p>
                                    - Sam, Satisfied Athlete X
                                </div>
                            </div>
                            <p>
                                What sets our street workout plan apart is its adaptability and versatility. No equipment? No problem. Our plan utilizes your environment, turning everyday objects like bars, benches, and walls into powerful training tools. This not only makes your workouts more dynamic but also keeps them fun and engaging. You’ll develop the kind of real-world strength that translates directly into daily life, all while working out in the fresh air and sunshine.
                            </p>
                            <p>
                                By choosing our street workout plan, you’re not just committing to a fitness regimen – you’re joining a community of like-minded individuals who are passionate about pushing their limits and redefining what’s possible. Street workouts build more than just muscle; they build mental toughness, resilience, and a deep sense of accomplishment. Get ready to challenge yourself, break barriers, and discover the incredible capabilities of your body.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Schedule title='STREET WORKOUT' tabs={tabs}/>
    <Pricing sport='Street Workout' setBoughtProgram={setBoughtProgram}/>
    <Comments comments={comments}/>
    </main>
  )
}

export default SWBody