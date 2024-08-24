import React, { Dispatch, SetStateAction, useEffect } from 'react'
import Schedule from './Schedule'
import BBHero from '../../assets/img/hero/box_hero.jpg'
import BBall from '../../assets/img/gallery/boxing.jpg';
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
    new SchTab('Sparing', '8am - 10am','Немања Ђукић'),
    new SchTab('Rest', '10am - 5pm','Немања Ђукић'),
    new SchTab('Pull workout', '5pm - 6pm','Немања Ђукић'),
    new SchTab('Push workout', '5pm - 6pm','Jack Johnson'),
    new SchTab('Legs workout', '5pm - 6pm','Adam Smith'),
];

interface BoxingProps {
    setBoughtProgram: Dispatch<SetStateAction<{ name: string; price: string }>>;
}

const BoxingBody: React.FC<BoxingProps> = ({setBoughtProgram}) => {
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
                                <h2>BOXING</h2>
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
                            <h2 style={{color: '#2d2d2d'}}>Ignite Your Inner Champion: Transform with Our Elite Boxing Program</h2>
                            <ul className="blog-info-link mt-3 mb-4">
                                <li><a href="#"><i className="fa fa-comments"></i> 03 Comments</a></li>
                            </ul>
                            <p className="excert">
                                At our boxing program, we offer a comprehensive and dynamic training experience designed to help you reach your peak fitness and performance levels. Whether you're a beginner or an experienced fighter, our tailored workouts are crafted to enhance your strength, agility, and endurance. Our program combines traditional boxing techniques with modern training methods, ensuring you get a full-body workout that is both challenging and effective.
                            </p>
                            <p>
                                Boxing is not just about throwing punches; it’s about building discipline, resilience, and confidence. Our program emphasizes skill development and technique while promoting overall physical fitness. You’ll engage in high-intensity interval training, strength conditioning, and tactical drills that help improve your reflexes and coordination. This multifaceted approach not only boosts your boxing skills but also contributes to better cardiovascular health and muscle toning.
                            </p>
                            <div className="quote-wrapper">
                                <div className="quotes">
                                    <p>
                                        The trainers are incredibly knowledgeable and motivating, and the workouts are intense and rewarding. I've seen remarkable improvements in my fitness levels and have gained a new sense of confidence.
                                    </p>
                                    - Amanda, Satisfied Athlete X
                                </div>
                            </div>
                            <p>
                                One of the standout features of our boxing program is the personalized coaching we offer. Our experienced trainers work closely with you to set and achieve your goals, providing ongoing feedback and support. With a focus on individual progress and tailored adjustments, you can be assured of a training experience that meets your unique needs and maximizes your results.
                            </p>
                            <p>
                                Choosing our boxing program means investing in a healthier and more empowered version of yourself. Beyond the physical benefits, boxing also promotes mental toughness and stress relief. It’s a powerful way to challenge yourself, break out of your comfort zone, and gain a sense of accomplishment. Our program fosters a supportive community where you can thrive and grow both inside and outside the ring.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Schedule title='BOXING' tabs={tabs}/>
    <Pricing sport='boxing' setBoughtProgram={setBoughtProgram}/>
    <Comments comments={comments}/>
    </main>
  )
}

export default BoxingBody