import React from 'react'
import { Program } from '../models/program.tsx';
import { Link } from 'react-router-dom';

interface OneProgramProps {
  program: Program;
}
const OneProgram: React.FC<OneProgramProps> = ({program}) => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6">
        <div className="single-cat single-cat2 text-center mb-50">
            <div className="cat-icon">
                <i className="flaticon">{program.image}</i>
            </div>
            <div className="cat-cap">
                <h5><Link to={program.link}>{program.name}</Link></h5>
                <p>{program.description}</p>
            </div>
            <div className="img-cap">
                <Link to={program.link} className="">Discover More <i className="ti-arrow-right"></i></Link>
            </div>
        </div>
    </div>
  )
}

export default OneProgram