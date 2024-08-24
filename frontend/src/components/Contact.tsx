import React from 'react'
import contact_form from '../../assets/img/logo/default1.png'
import axios from 'axios'

const Contact: React.FC = () => {

    const sendEmail = async (event: React.FormEvent) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const data = new FormData(form);
        data.append('service_id', 'service_k8kps8c');
        data.append('template_id', 'template_8m1hlpo');
        data.append('user_id', 'bzmNzzv9NC7D14f9O');
        data.append('accessToken', 'Na1soaFdOghlsINF4bluW');

        const options = {
            method: 'POST',
            url: 'https://emailjs.p.rapidapi.com/api/v1.0/email/send-form',
            headers: {
                'x-rapidapi-key': '4924bcd8e0msh7534f3a1caaf78ep18a4a6jsna73b9640cb8d',
                'x-rapidapi-host': 'emailjs.p.rapidapi.com'
            },
            data: data
        };

        try {
	        await axios.request(options);
            alert('Email sent successfully!');
            form.reset();
        } catch (error) {
	        console.error(error);
            alert('Error sending email. Please try again later.');
        }
    };

  return (
    <section className="contact-form-main">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-xl-7 col-lg-7">
                        <div className="form-wrapper">
                            <div className="form-tittle">
                                <div className="row ">
                                    <div className="col-lg-11 col-md-10 col-sm-10">
                                        <div className="section-tittle">
                                            <span>Contact Form</span>
                                            <h2>Feel Free to contact us!</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form id="contact-form" method="POST" onSubmit={sendEmail}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-box user-icon mb-30">
                                            <input type="text" name="from_name" placeholder="Name" style={{textTransform: 'none'}} required/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-box email-icon mb-30">
                                            <input type="text" name="from_phone" placeholder="Phone" style={{textTransform: 'none'}}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mb-30">
                                        <div className="select-itms" style={{paddingTop: '15px'}}>
                                            <select name="program" id="program" defaultValue={'0'} required style={{color: 'gray', width: '100%', height: '45px', background: 'transparent', borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderBottom: '2px solid #e9f0f4', fontSize: '16px', padding: '10px 22px', paddingRight: '30px', fontWeight: '500'}}>
                                                <option value="0" disabled>Select your program</option>
                                                <option value="No program/new member">No program/new member</option>
                                                <option value="Boxing">Boxing</option>
                                                <option value="Basketball">Basketball</option>
                                                <option value="Tennis">Tennis</option>
                                                <option value="Group Fitness">Group Fitness</option>
                                                <option value="One on One Session">One on One Session</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-box subject-icon mb-30">
                                            <input type="Email" name="from_email" placeholder="Email" style={{textTransform: 'none'}} required/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-box message-icon mb-65">
                                            <textarea name="message" id="message" placeholder="Message" style={{textTransform: 'none'}} required></textarea>
                                        </div>
                                        <div className="submit-info">
                                            <button className="btn" type="submit">Send a Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="from-left d-none d-lg-block">
                <img src={contact_form} alt=""/>
            </div>
        </section>
  )
}

export default Contact