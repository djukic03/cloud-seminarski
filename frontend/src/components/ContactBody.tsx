import React, { useEffect } from 'react'
import Contact from './Contact'

const ContactBody: React.FC = () => {
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
                                <h2>Contact Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='maps-area'>
            <iframe className='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2677.5016549855027!2d20.473034615417493!3d44.77268167909888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a70576248bf79%3A0xadaf5cff042d3bd0!2sFaculty%20of%20Organizational%20Sciences!5e1!3m2!1sen!2srs!4v1668025886139!5m2!1sen!2srs" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div style={{paddingTop: "150px"}}>
        <Contact></Contact>
        </div>
    </main>
  )
}

export default ContactBody