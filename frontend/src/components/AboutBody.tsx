import React, { useEffect } from 'react'
import About from './About'
import About2 from './About2'
import OurTeam from './OurTeam'

const AboutBody: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <main>
        <div className="slider-area2">
            <div className="slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap hero-cap2 text-center pt-70">
                                <h2>About Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <About></About>
        <About2></About2>
        <OurTeam></OurTeam>
    </main>
  )
}

export default AboutBody