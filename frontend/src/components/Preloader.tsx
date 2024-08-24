import React from 'react'
import Loader from '../../assets/img/logo/loder.png'

const Preloader: React.FC = () => {
  return (
    <div id="preloader-active">
      <div className="preloader d-flex align-items-center justify-content-center">
        <div className="preloader-inner position-relative">
          <div className="preloader-circle"></div>
          <div className="preloader-img pere-text">
            <img src={Loader} alt="Loader" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
