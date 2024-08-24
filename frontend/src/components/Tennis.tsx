import React from 'react';
import '../../assets/css/style.css'; 

const Tennis: React.FC = () => {
  return (
    <section className="tennis-page section-padding">
      <div
        className="background-image"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `url('assets/img/tennis/tennis_background2.png') no-repeat center center fixed`,
          backgroundSize: 'cover',
          zIndex: -1,
        }}
      ></div>

      <header>
        <nav className="navbar">
        </nav>
      </header>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Hero Section */}
        <div className="hero-section text-center mb-5" style={{ marginTop: '100px' }}>
          <h1 className="hero-title">TENNIS</h1>
          <img 
            className="img-fluid hero-image" 
            src="assets/img/tennis/novak_djokovic1.png" 
            alt="Novak Djokovic" 
            style={{ 
              borderRadius: '8px', 
              boxShadow: '0 4px 8px rgba(0,0,0,0.3)', 
              marginBottom: '50px',
              marginTop: '50px', 
            }}
          />
          <p className="hero-subtitle">Where Your Tennis Journey Begins!</p>
        </div>

        <div className="row mb-5">
          <div className="col-lg-8">
            <div className="about-details">
              <h2 className="about-title">About Our Tennis Program</h2>
              <p className="about-text">
                Are you passionate about tennis or looking to start your journey on the court? Our tennis program offers 
                a range of professional services designed to elevate your game and achieve your goals. Whether you're a 
                beginner eager to learn or an experienced player aiming to refine your skills, we have the expertise and 
                resources to support you.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-info">
              <h3>Contact Us</h3>
              <p>If you have any questions or want to schedule a session, feel free to reach out!</p>
              <ul className="contact-list">
                <li>Email: <a href="mailto:info@tennisprogram.com">info@tennisprogram.com</a></li>
                <li>Phone: <a href="tel:+1234567890" style={{ fontSize: '18px' }}>+123 456 7890</a></li>
                <li><a href="/contact" className="btn btn-primary">Contact Form</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services-section mb-5">
          <h2 className="services-title">Our Services Include:</h2>
          <div className="row">
            {[
              {
                title: "Private Lessons",
                description: "Experience personalized coaching with our skilled instructors. Tailored to your individual needs, helping you improve technique, strategy, and performance.",
              },
              {
                title: "Group Clinics",
                description: "Join our group clinics for a dynamic and social learning environment. Perfect for all levels, focusing on skill development, match play, and fitness.",
              },
              {
                title: "Junior Programs",
                description: "Engage young players in a fun and exciting way. Our programs build confidence, improve coordination, and foster a love for tennis.",
              },
              {
                title: "Adult Training",
                description: "Structured sessions to get back into tennis or compete at a higher level. Enhancing your game with a professional approach.",
              },
              {
                title: "Court Booking",
                description: "Access our well-maintained courts for practice sessions or friendly matches with convenient booking options.",
              },
              {
                title: "Tennis Camps",
                description: "Join our seasonal camps for intensive training. A blend of skill development, match play, and physical conditioning.",
              },
            ].map((service, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="service-card p-3 border rounded">
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="coaches-section mb-5">
          <h2>Meet Our Coaches</h2>
          <div className="row">
            {[
              {
                name: "Milica Drljača",
                role: "Experienced Tennis Coach",
                description: "15 years in competitive training. Expert in technique and strategy.",
                imgSrc: "assets/img/tennis/tennis_coach1.png",
              },
              {
                name: "Siniša Lazić",
                role: "Adult Tennis Coach",
                description: "Dedicated to helping players of all levels improve skills and enjoy the game.",
                imgSrc: "assets/img/tennis/tennis_coach2.png",
              },
            ].map((coach, index) => (
              <div key={index} className="col-md-6 mb-4 text-center">
                <h5 className="coach-name">{coach.name}</h5>
                <div className="coach-card d-flex align-items-center justify-content-center p-3 border rounded">
                  <img 
                    className="coach-image" 
                    src={coach.imgSrc} 
                    alt={coach.name} 
                  />
                  <div style={{ marginLeft: '15px' }}>
                    <p className="coach-role">{coach.role}</p>
                    <p className="coach-description">{coach.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="comments-section">
          <h4>Comments</h4>
          {Array(3).fill(0).map((_, index) => (
            <div key={index} className="comment-list mb-4">
              <div className="single-comment d-flex">
                <div className="thumb me-3">
                  <img src={`assets/img/comment/comment_${index + 1}.png`} alt={`Comment ${index + 1}`} />
                </div>
                <div className="desc">
                  <p className="comment">
                    This is a sample comment. Users can share their feedback here.
                  </p>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <h5><a href="#">User Name</a></h5>
                      <p className="date">Date of Comment</p>
                    </div>
                    <div className="reply-btn">
                      <a href="#" className="btn-reply text-uppercase">Reply</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="comment-form mt-4">
          <h4>Leave a Reply</h4>
          <form className="form-contact comment_form" action="#" id="commentForm">
            <div className="row">
              <div className="col-12 mb-3">
                <div className="form-group">
                  <textarea 
                    className="form-control w-100" 
                    name="comment" 
                    id="comment" 
                    cols={30} 
                    rows={5} 
                    placeholder="Write Comment"
                  ></textarea>
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <input 
                    className="form-control" 
                    name="name" 
                    id="name" 
                    type="text" 
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="form-group">
                  <input 
                    className="form-control" 
                    name="email" 
                    id="email" 
                    type="email" 
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="col-12">
                <button 
                  className="btn btn-primary" 
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Tennis;