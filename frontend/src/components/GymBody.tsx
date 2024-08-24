import React, { Dispatch, SetStateAction, useEffect } from 'react'
import Schedule from './Schedule'
import BBHero from '../../assets/img/hero/gym_hero.jpg'
import BBall from '../../assets/img/gallery/gym.jpg';
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

interface GymProps {
    setBoughtProgram: Dispatch<SetStateAction<{ name: string; price: string }>>;
}

const GymBody: React.FC<GymProps> = ({setBoughtProgram}) => {
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
                                <h2>GYM</h2>
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
                            <h2 style={{color: '#2d2d2d'}}>Elevate Your Fitness: Dominate Your Goals with Our Gym Workout Plan</h2>
                            <ul className="blog-info-link mt-3 mb-4">
                                <li><a href="#"><i className="fa fa-comments"></i> 03 Comments</a></li>
                            </ul>
                            <p className="excert">
                                Are you ready to take your fitness to the next level? Our gym workout plan is designed to push your boundaries and help you achieve the results you've always wanted. With a focus on progressive overload and strategic training techniques, this plan is perfect for anyone looking to build muscle, increase strength, and enhance overall fitness. Whether you're new to the gym or a seasoned athlete, our plan adapts to your experience level, ensuring you’re always challenged and never plateau.
                            </p>
                            <p>
                                Our program stands out because it’s not just about lifting weights – it’s about mastering your body. We incorporate a variety of exercises, from compound movements to isolation workouts, ensuring a balanced approach to muscle development and fat loss. Each workout is structured to maximize efficiency, so you get the most out of every session. You'll not only see improvements in your physique but also in your endurance, flexibility, and agility.
                            </p>
                            <div className="quote-wrapper">
                                <div className="quotes">
                                    <p>
                                        This gym workout plan has completely transformed my fitness journey. I’ve gained strength, lost fat, and most importantly, I’ve learned how to train smarter. The plan is easy to follow, and the results speak for themselves.
                                    </p>
                                    - Joey, Satisfied Athlete X
                                </div>
                            </div>
                            <p>
                                Consistency is key, and our gym workout plan is designed to keep you motivated and on track. With detailed instructions and progression tracking, you can easily monitor your progress and make adjustments as needed. Plus, our expert trainers provide tips and techniques to ensure proper form and reduce the risk of injury. This personalized guidance helps you build confidence in the gym, making your workouts more effective and enjoyable.
                            </p>
                            <p>
                                Choosing our gym workout plan means committing to a healthier, stronger you. Beyond the physical transformations, regular gym workouts can boost your mental well-being, reduce stress, and improve your overall quality of life. We foster a supportive community where everyone is encouraged to reach their full potential. Join us, and let’s dominate those fitness goals together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Schedule title='GYM' tabs={tabs}/>
    <Pricing sport='Gym' setBoughtProgram={setBoughtProgram}/>
    <Comments comments={comments}/>
    </main>
  )
}

export default GymBody