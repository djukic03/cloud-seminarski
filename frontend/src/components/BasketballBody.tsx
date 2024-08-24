import React, { Dispatch, SetStateAction, useEffect } from 'react'
import BasketballSchedule from './Schedule'
import BBHero from '../../assets/img/hero/bball_hero.jpg'
import BBall from '../../assets/img/gallery/Basketball.jpg';
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
    new SchTab('Basketball drills', '8am - 10am','Немања Ђукић'),
    new SchTab('Rest', '10am - 5pm','Немања Ђукић'),
    new SchTab('Pull workout', '5pm - 6pm','Немања Ђукић'),
    new SchTab('Push workout', '5pm - 6pm','Jack Johnson'),
    new SchTab('Legs workout', '5pm - 6pm','Adam Smith'),
];

interface BasketballProps {
    setBoughtProgram: Dispatch<SetStateAction<{ name: string; price: string }>>;
}

const BasketballBody: React.FC<BasketballProps> = ({setBoughtProgram}) => {
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
                                <h2>BASKETBALL</h2>
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
                            <h2 style={{color: '#2d2d2d'}}>Unlock Your Basketball Potential: Elevate Your Game to Pro Level</h2>
                            <ul className="blog-info-link mt-3 mb-4">
                                <li><a href="#"><i className="fa fa-comments"></i> 03 Comments</a></li>
                            </ul>
                            <p className="excert">
                                Are you ready to take your basketball skills to the next level? Our comprehensive basketball workout plan 
                                is designed for players who are serious about becoming elite athletes. Whether you're aiming for a spot on your 
                                high school team, securing a college scholarship, or dreaming of a professional career, 
                                our plan will help you build the strength, speed, and skill set needed to dominate the court.
                            </p>
                            <p>
                                Basketball is more than just a game—it's a tool for personal growth and development. 
                                It teaches discipline, teamwork, and resilience, all of which are essential for success both on and off the court. 
                                By committing to our workout plan, you’ll not only enhance your physical abilities but also develop the mental toughness 
                                required to excel in competitive environments.
                            </p>
                            <div className="quote-wrapper">
                                <div className="quotes">
                                    <p>
                                    After dedicating myself to the workout plan, I saw a complete transformation in my game. 
                                    My speed, strength, and shooting have all improved drastically, and now I’m one of the top players on my team. 
                                    This plan is a game-changer.
                                    </p>
                                    - Alex, Satisfied Athlete X
                                </div>
                            </div>
                            <p>
                                Our basketball workout plan is meticulously crafted by experts who understand what it takes to compete at the highest levels. 
                                It includes a mix of strength training, agility drills, and skill-specific exercises that target every aspect of your game. 
                                From shooting accuracy to defensive footwork, you'll gain the tools you need to outplay your opponents and catch the eye of coaches and scouts.
                            </p>
                            <p>
                                Consistency is key to success, and with our workout plan, you'll have a clear, structured path to follow. 
                                We provide detailed instructions, progress tracking, and motivational tips to keep you on course. By dedicating yourself to this program, 
                                you’ll see noticeable improvements in your performance, putting you on the fast track to achieving your basketball dreams. 
                                Don’t just play the game, master it, and become the player you've always wanted to be.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <BasketballSchedule title='BASKETBALL' tabs={tabs}/>
    <Pricing sport='Basketball' setBoughtProgram={setBoughtProgram}/>
    <Comments comments={comments}/>
    </main>
  )
}

export default BasketballBody