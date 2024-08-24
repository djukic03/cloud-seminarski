import React, { useEffect } from 'react'
import Gallery from './Gallery'

const GalleryBody: React.FC = () => {
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
                            <h2>our gallery</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div style={{paddingTop: "150px", paddingBottom: "150px"}}>
    <Gallery></Gallery>
    </div>
    </main>
  )
}

export default GalleryBody