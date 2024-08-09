import React from 'react'
import { FcCheckmark } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";

const Pricing: React.FC = () => {
  return (
    <section className="pricing-area" style={{padding: '5%'}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                    <div className="section-tittle text-center mb-100">
                        <span>OUR PLANS</span>
                        <h2>CHOOSE YOUR PRICING PLAN</h2>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-8">
                    <div className="ps-item">
                        <h3>BASIC PLAN</h3>
                        <div className="pi-price">
                            <h2>FREE</h2>
                            <span>UNLIMITED</span>
                        </div>
                        <ul>
                            <li><FcCheckmark/> Basic workout plan</li>
                            <li><FcCheckmark/> Workout tracking</li>
                            <li><FcCancel/> Access to coaches</li>
                            <li><FcCancel/> Community access</li>
                            <li><FcCancel/> 1-on-1 virtual coaching sessions</li>
                            <li><FcCancel/> Mental performance coaching</li>
                        </ul>
                        <a href="#" className="primary-btn pricing-btn">Enroll now</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-8">
                    <div className="ps-item">
                        <h3>ADVANCED PLAN</h3>
                        <div className="pi-price">
                            <h2>$ 29.9</h2>
                            <span>/ MONTH</span>
                        </div>
                        <ul>
                            <li><FcCheckmark/> Personalized workout plan</li>
                            <li><FcCheckmark/> Workout tracking</li>
                            <li><FcCheckmark/> Access to coaches</li>
                            <li><FcCheckmark/> Community access</li>
                            <li><FcCancel/> 1-on-1 virtual coaching sessions</li>
                            <li><FcCancel/> Mental performance coaching</li>
                        </ul>
                        <a href="#" className="primary-btn pricing-btn">Enroll now</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-8">
                    <div className="ps-item">
                        <h3>PRO PLAN</h3>
                        <div className="pi-price">
                            <h2>$ 69.9</h2>
                            <span>/ MONTH</span>
                        </div>
                        <ul>
                            <li><FcCheckmark/> Personalized workout plan</li>
                            <li><FcCheckmark/> Workout tracking</li>
                            <li><FcCheckmark/> Access to coaches</li>
                            <li><FcCheckmark/> Community access</li>
                            <li><FcCheckmark/> 1-on-1 virtual coaching sessions</li>
                            <li><FcCheckmark/> Mental performance coaching</li>
                        </ul>
                        <a href="#" className="primary-btn pricing-btn">Enroll now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pricing