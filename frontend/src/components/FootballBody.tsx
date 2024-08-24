import React, { Dispatch, SetStateAction, useEffect } from 'react'
import FHero from '../../assets/img/hero/fball_hero.jpg'
import FBall from '../../assets/img/gallery/football.jpg';
import Pricing from './Pricing'
import Comments from './Comments'
import Schedule from './Schedule';
import { SchTab } from '../models/schtab';
import { Comment } from '../models/comment';

const comments: Comment[] = [
    new Comment("Jacob Blunt","Great workout plan! I love it! It helped me to join my collage basketball team.","December 4, 2023 at 3:12 pm ", '../../assets/img/comment/comment_1.png'),
    new Comment("Alex Ferguson", "I love this program. 5 stars!", "December 4, 2023 at 3:12 pm ", '../../assets/img/comment/comment_2.png'),
    new Comment("John Doe", "I've been playing this program for 2 years. I can't wait to see where I can improve.", "December 4, 2023 at 3:12 pm ", '../../assets/img/comment/comment_3.png')
]

const tabs: SchTab[] = [
    new SchTab('Rest day', 'Full day','Немања Ђукић'),
    new SchTab('Football drills', '8am - 10am','Немања Ђукић'),
    new SchTab('Rest', '10am - 5pm','Немања Ђукић'),
    new SchTab('Pull workout', '5pm - 6pm','Немања Ђукић'),
    new SchTab('Push workout', '5pm - 6pm','Jack Johnson'),
    new SchTab('Legs workout', '5pm - 6pm','Adam Smith'),
];

interface FootballProps {
    setBoughtProgram: Dispatch<SetStateAction<{ name: string; price: string }>>;
}

const FootballBody: React.FC<FootballProps> = ({setBoughtProgram}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <main>
        <div className="slider-area2" style={{backgroundImage: `url(${FHero})`}}>
            <div className="slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap hero-cap2 pt-70 text-center">
                                <h2>FOOTBALL</h2>
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
                            <img className="img-fluid" src={FBall} alt=""/>
                        </div>
                        <div className="blog_details">
                            <h2 style={{color: '#2d2d2d'}}>Transform Your Game: Reach Pro-Level Football Performance</h2>
                            <ul className="blog-info-link mt-3 mb-4">
                                <li><a href="#"><i className="fa fa-comments"></i> 03 Comments</a></li>
                            </ul>
                            <p className="excert">
                                Are you ready to push your football abilities to their peak? Our football workout plan is crafted for athletes who are serious about excelling on the field. Whether your goal is to shine in school competitions, secure a spot on a college roster, or pursue a professional career, this plan will provide you with the strength, speed, and strategy needed to dominate the game.
                            </p>
                            <p>
                                Football is not just a sport—it’s a pathway to developing discipline, leadership, and resilience. The lessons learned on the field, such as teamwork and perseverance, extend beyond the game and into everyday life. By following our structured workout plan, you’ll not only enhance your physical prowess but also build the mental toughness needed to thrive under pressure and succeed in competitive environments.
                            </p>
                            <div className="quote-wrapper">
                                <div className="quotes">
                                    <p>
                                        This program completely transformed my game. I went from being an average player to one of the top athletes on my team. The workout plan is intense, but it works. My strength, speed, and technique have all improved, and I’m now playing at a level I never thought possible. If you’re serious about football, this is the plan for you.
                                    </p>
                                    - Jordan, Satisfied Athlete X
                                </div>
                            </div>
                            <p>
                                Our football workout plan is designed by experts who know what it takes to succeed at the highest levels. The program combines strength training, agility drills, and position-specific exercises, targeting every aspect of your game. Whether you’re looking to improve your speed, sharpen your technique, or increase your endurance, this plan will help you stand out and reach your full potential.
                            </p>
                            <p>
                                Consistency and commitment are key to reaching your football goals. Our workout plan provides a clear and structured path to follow, with detailed instructions, progress tracking, and ongoing motivation to keep you on track. By dedicating yourself to this program, you’ll see significant improvements in your performance, setting you on the path to a successful football career. Don’t just play the game—master it, and become the player you’ve always dreamed of being.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Schedule title='FOOTBALL' tabs={tabs}/>
    <Pricing sport='football' setBoughtProgram={setBoughtProgram}/>
    <Comments comments={comments}/>
    </main>
  )
}

export default FootballBody