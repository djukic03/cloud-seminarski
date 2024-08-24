import React, { useEffect } from 'react'
import OneProgram from './OneProgram'
import { Program } from '../models/program';
import { IoMdFootball } from "react-icons/io";
import { IoIosTennisball } from "react-icons/io";
import { FaBasketball } from "react-icons/fa6";
import { PiBoxingGloveFill } from "react-icons/pi";
import { TbBarbell } from "react-icons/tb";
import { IoAccessibility } from "react-icons/io5";

const programs: Program[] = [
    new Program('FOOTBALL', 'Transform Your Game: Reach Pro-Level Football Performance', <IoMdFootball></IoMdFootball>, '/programs/football'),
    new Program('TENIS', 'NOLE DJOLE, DJOLE NOLE, NOVAK DJOKOVIC THE GOAT OF TENIS', <IoIosTennisball></IoIosTennisball>, '/tennis'),
    new Program('BASKETBALL', 'Unlock Your Basketball Potential: Elevate Your Game to Pro Level', <FaBasketball></FaBasketball>, '/programs/basketball'),
    new Program('BOXING', 'Ignite Your Inner Champion: Transform with Our Elite Boxing Program', <PiBoxingGloveFill></PiBoxingGloveFill>, '/programs/boxing'),
    new Program('GYM', 'Elevate Your Fitness: Dominate Your Goals with Our Gym Workout Plan', <TbBarbell></TbBarbell>, '/programs/gym'),
    new Program('STREET WORKOUT', 'Defy Limits: Achieve Peak Performance with Our Street Workout Plan', <IoAccessibility></IoAccessibility>, '/programs/street-workout')
];

const ProgramsBody: React.FC = () => {
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
                                <h2>our Programs</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="services-area pt-100 pb-150">
            <section className="wantToWork-area w-padding">
                <div className="container">
                    <div className="row align-items-end justify-content-between">
                        <div className="col-lg-6 col-md-10 col-sm-10">
                            <div className="section-tittle">
                                <span>oUR PROGRAMS</span>
                                <h2>CHOOSE YOUR PROGRAM </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    {programs.map((program, index) => (
                        <OneProgram key={index} program={program}></OneProgram>
                    ))}
                </div>
            </div>
        </section>
    </main>
  )
}

export default ProgramsBody