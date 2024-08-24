import React from 'react'
import OneProgram from './OneProgram'
import sectionBg from '../../assets/img/gallery/section_bg01.png'
import { Program } from '../models/program.tsx'
import { Link } from 'react-router-dom';

interface ServicesProps {
    programs: Program[];
  }
  

const Services: React.FC<ServicesProps> = ({ programs }) => {
  return (
    <section className="services-area pt-100 pb-150 section-bg" style={{backgroundImage: `url(${sectionBg})`}}>
        <section className="wantToWork-area w-padding">
            <div className="container">
                <div className="row align-items-end justify-content-between">
                    <div className="col-lg-6 col-md-10 col-sm-10">
                        <div className="section-tittle section-tittle2">
                            <span>oUR sERVICES FOR YOU</span>
                            <h2>PUSH YOUR LIMITS FORWARD</h2>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-3">
                        <Link to="/programs" className="btn wantToWork-btn f-right">Our Programs</Link>
                    </div>
                </div>
            </div>
        </section>
        <div className="container">
            <div className="row">
                <OneProgram program={programs[0]}></OneProgram>
                <OneProgram program={programs[1]}></OneProgram>
                <OneProgram program={programs[2]}></OneProgram>
            </div>
        </div>
    </section>
  )
}

export default Services