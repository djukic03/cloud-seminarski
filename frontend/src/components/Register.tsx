import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { User } from '../models/user';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    retypePassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { username, firstName, lastName, email, password, retypePassword } = formData;

    try {
      const response = await axios.get<User[]>('/usersData.json');
      const users = response.data;
      const sameUsername = users.find(u => u.username === username);
      if (sameUsername) {
        alert('Username already exists');
        return;
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
    
    if (password !== retypePassword) {
        alert('Passwords do not match!');
        return;
      }
    
    const userData = {
        username,
        fullName: `${firstName} ${lastName}`,
        email,
        password
    };

    try {
      const response = await axios.post('http://localhost:5000/api/register', userData);
      console.log('Data saved successfully:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <section className="contact-form-main" style={{ height: '100%', margin: 0 }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-7">
            <div className="form-wrapper">
              <div className="form-tittle">
                <div className="row ">
                  <div className="col-lg-11 col-md-10 col-sm-10">
                    <div className="section-tittle">
                      <span>Register Form</span>
                      <h2>Make an account</h2>
                    </div>
                  </div>
                </div>
              </div>
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="">
                  <div className="col-lg-12 col-md-6">
                    <div className="form-box user-icon mb-30">
                      <input type="text" name="username" style={{ textTransform: 'none' }} placeholder="Username" value={formData.username} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="form-box user-icon mb-30">
                      <input type="text" name="firstName" style={{ textTransform: 'none' }} placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="form-box user-icon mb-30">
                      <input type="text" name="lastName" style={{ textTransform: 'none' }} placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="form-box user-icon mb-30">
                      <input type="email" name="email" style={{ textTransform: 'none' }} placeholder="Email" value={formData.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="form-box email-icon mb-30">
                      <input type="password" name="password" style={{ textTransform: 'none' }} placeholder="Password" value={formData.password} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="form-box user-icon mb-30">
                      <input type="password" name="retypePassword" style={{ textTransform: 'none' }} placeholder="Retype Password" value={formData.retypePassword} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="col-lg-12" style={{ marginTop: '70px' }}>
                    <div className="submit-info">
                      <button className="btn" type="submit">Register</button>
                    </div>
                    <div className="mt-30">
                      <p>Already have an account?<Link to="/login" className="reg-btn">Log in</Link></p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
