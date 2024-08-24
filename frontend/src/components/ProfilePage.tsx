import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useUser } from '../contexts/UserContext';
import { Chart } from "react-google-charts";
import { Workout } from '../models/workout';

export const MaxWeightChartOptions = {
  chart: {
    title: "Max Weight",
    subtitle: "Max weight lifted on one rep",
  },
};

export const MaxRepsChartOptions = {
  chart: {
    title: "Max Reps",
    subtitle: "Max reps done in one set",
  },
};

export const MaxVolumeChartOptions = {
  chart: {
    title: "Max Volume",
    subtitle: "Max volume lifted in one set",
  },
};

const ProfilePage: React.FC = () => {
  
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const { user } = useUser();
  const [changeMade, setChangeMade] = useState(false);

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setFirstName(user.fullName.split(' ')[0]);
      setLastName(user.fullName.substring(user.fullName.indexOf(' ') + 1));
      setEmail(user.email);
    }
  }, []);

  const handleSaveChanges = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try{
      const response = await axios.put("http://localhost:5000/api/updateUser",{
        username,
        fullName: `${firstName} ${lastName}`,
        email
      });
      if(response.status === 200){
        alert('Changes saved successfully!');
        setChangeMade(false);
      }else{
        alert('Failed to save changes');
      }
    } catch (error) {
      console.error(error);
      alert('Server error');
    }
  }

  const [quote, setQuote] = useState({
    quote: '',
    author: '',
    category: ''
  });

  useEffect(()=>{
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=inspirational',
        headers: {
          'X-Api-Key': 'qdsiPTWpIHNxM9oUS7pa8A==IWKFvQY5fEhwJmBy',
        }
      };
      
      try {
        const response = await axios.request(options);
        setQuote(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

    const handleCategorySelect = (category: number) => {
      setSelectedCategory(category);
    };


  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [selectedExercise, setSelectedExercise] = useState<string>('');
  const [maxWeightChartData, setMaxWeightChartData] = useState<any[]>([]);
  const [maxRepsChartData, setMaxRepsChartData] = useState<any[]>([]);
  const [maxVolumeChartData, setMaxVolumeChartData] = useState<any[]>([]);
  const [chartVisible, setChartVisible] = useState(false);
  
  useEffect(() => {
    if (selectedExercise) {
      const fetchData = async () => {
        try {
          const response = await axios.get('/workouts.json');
          setWorkouts(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, [selectedExercise]);

  useEffect(() => {
    if (workouts.length > 0 && selectedExercise) {
      const workoutsFromUser = workouts.filter(workout => workout.username === username);

      const maxWeightWorkouts = workoutsFromUser.map(workout => {
        const exerciseData = workout.workoutData.filter(data => data.exercise === selectedExercise);
        const maxWeight = exerciseData.length > 0 ? Math.max(...exerciseData.map(data => data.weight)) : 0;
        return {
          date: workout.date.substring(0, 10),
          maxWeight,
        };
      });

      setMaxWeightChartData([
        ['Date', 'Max Weight'],
        ...maxWeightWorkouts.map(workout => [workout.date, workout.maxWeight]),
      ]);

      const maxRepsWorkouts = workoutsFromUser.map(workout => {
        const exerciseData = workout.workoutData.filter(data => data.exercise === selectedExercise);
        const maxReps = exerciseData.length > 0 ? Math.max(...exerciseData.map(data => data.reps)) : 0;
        return {
          date: workout.date.substring(0, 10),
          maxReps,
        };
      });

      setMaxRepsChartData([
        ['Date', 'Max Reps'],
        ...maxRepsWorkouts.map(workout => [workout.date, workout.maxReps]),
      ]);

      const maxVolumeWorkouts = workoutsFromUser.map(workout => {
        const exerciseData = workout.workoutData.filter(data => data.exercise === selectedExercise);
        const maxVolume = exerciseData.length > 0 ? Math.max(...exerciseData.map(data => data.reps*data.weight)) : 0;
        return {
          date: workout.date.substring(0, 10),
          maxVolume,
        };
      });

      setMaxVolumeChartData([
        ['Date', 'Max Volume'],
        ...maxVolumeWorkouts.map(workout => [workout.date, workout.maxVolume]),
      ]);

      setChartVisible(true);
    }
  }, [workouts, selectedExercise, username]);
  
  return (
    <main>
        <div className="slider-area2">
            <div className="slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap hero-cap2 text-center pt-70">
                                <h2>Your Profile Page</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="blog_area single-post-area">
            <div className="posts-list" style={{marginLeft: '10%', marginRight: '10%'}}>
                <div className="single-post">
                    <div className="blog_details">
                        <div className="quote-wrapper">
                            <p>Motivational quote for you: </p>
                            <div className="quotes">
                                <p>{quote.quote}</p>
                                - {quote.author}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="blog_area section-padding" style={{paddingTop: '3%'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="blog_right_sidebar" style={{position: 'sticky', top: '140px'}}>
                            <aside className="single_sidebar_widget post_category_widget" >
                                <h4 className="widget_title" style={{color: '#2d2d2d'}}>Settings</h4>
                                    <ul className="list cat-list">
                                        <li>
                                            <a onClick={() => handleCategorySelect(0)} className="d-flex">
                                                <p>Account Information</p>
                                            </a>
                                        </li>
                                        <li>
                                            <a onClick={() => handleCategorySelect(1)} className="d-flex">
                                                <p>Workout Analysis</p>
                                            </a>
                                        </li>
                                    </ul>
                            </aside>
                        </div>
                    </div>
                    <div className="col-lg-8 mb-5 mb-lg-0">
                        <div className ="blog_left_sidebar">
                          {selectedCategory === 0 && (
                            <section className="contact-form-main" style={{ height: '100%', margin: 0 }}>
                              <div className="container">
                                <div className="row justify-content-center">
                                  <div style={{ width: '100%' }}>
                                    <div className="form-wrapper">
                                      <div id="contact-form" className='profile' style={{display: 'flex', flexDirection: 'row',paddingBottom: '0%'}}>
                                      <p style={{ marginRight: '20px', marginBottom: '0', alignContent: 'center', whiteSpace: 'nowrap'}}>Profile Picture: </p>
                                        <img className="profile-picture" src={'../../assets/img/logo/profile.png'} alt="profile" />
                                      </div>
                                      <form id="contact-form" onSubmit={handleSaveChanges}>
                                        <div className="">
                                          <div className="col-lg-12 col-md-6">
                                            <div className="form-box user-icon mb-30" style={{ display: 'flex', flexDirection: 'row'}}>
                                              <p style={{ margin: 0, alignContent: 'center', whiteSpace: 'nowrap'}}>Username: </p>
                                              <input type="text" name="username" style={{ textTransform: 'none' }} value={username} disabled />
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-6">
                                            <div className="form-box user-icon mb-30" style={{ display: 'flex', flexDirection: 'row'}}>
                                            <p style={{ margin: 0, alignContent: 'center', whiteSpace: 'nowrap'}}>First Name: </p>
                                              <input type="text" name="firstName" style={{ textTransform: 'none' }} placeholder="First Name" value={firstName} onChange={(e) => {setFirstName(e.target.value); setChangeMade(true)}} />
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-6">
                                            <div className="form-box user-icon mb-30" style={{ display: 'flex', flexDirection: 'row'}}>
                                            <p style={{ margin: 0, alignContent: 'center', whiteSpace: 'nowrap'}}>Last Name: </p>
                                              <input type="text" name="lastName" style={{ textTransform: 'none' }} placeholder="Last Name" value={lastName} onChange={(e) => {setLastName(e.target.value); setChangeMade(true)}} />
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-6">
                                            <div className="form-box user-icon mb-30" style={{ display: 'flex', flexDirection: 'row'}}>
                                            <p style={{ margin: 0, alignContent: 'center', whiteSpace: 'nowrap'}}>Email: </p>
                                              <input type="email" name="email" style={{ textTransform: 'none' }} placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value); setChangeMade(true)}} />
                                            </div>
                                          </div>
                                          <div className="col-lg-12" style={{ marginTop: '70px' }}>
                                            <div className="submit-info">
                                              <button className="btn" type="submit" {...(!changeMade ? { style: { cursor: 'not-allowed' }, disabled: true } : {})}>Save changes</button>
                                            </div>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                          )}
                          {selectedCategory === 1 && (
                            <section className="contact-form-main" style={{ height: '100%', margin: 0 }}>
                              <div className="container">
                                <div className="row justify-content-center">
                                  <div style={{ width: '100%' }}>
                                    <div className="form-wrapper">
                                      <div className='pt-15 pl-15 pb-15'>
                                        <h2>Choose an exercise</h2>
                                        <select name="exercises" id="exercises" value={selectedExercise} onChange={(e) => setSelectedExercise(e.target.value)} style={{ width: '30%', height: '40px', fontSize: '14px' }}>
                                          <option value="" disabled>Select an exercise</option>
                                          <option value="Push-ups">Push ups</option>
                                          <option value="Squats">Squats</option>
                                          <option value="Pull-ups">Pull ups</option>
                                          <option value="Lunges">Lunges</option>
                                          <option value="Crunches">Crunches</option>
                                        </select>
                                      </div>
                                      <div className='charts'>
                                        {chartVisible && 
                                        <>
                                          <div className="col-lg-12 col-md-6">
                                            <div className="form-box user-icon pb-30">
                                              <Chart
                                                width={'100%'}
                                                height={'400px'}
                                                chartType="Line"
                                                loader={<div>Loading Chart...</div>}
                                                data={maxWeightChartData}
                                                options={MaxWeightChartOptions}
                                              />
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-6">
                                            <div className="form-box user-icon pb-30">
                                              <Chart
                                                width={'100%'}
                                                height={'400px'}
                                                chartType="Line"
                                                loader={<div>Loading Chart...</div>}
                                                data={maxRepsChartData}
                                                options={MaxRepsChartOptions}
                                              />
                                            </div>
                                          </div>
                                          <div className="col-lg-12 col-md-6">
                                            <div className="form-box user-icon pb-30">
                                              <Chart
                                                width={'100%'}
                                                height={'400px'}
                                                chartType="Line"
                                                loader={<div>Loading Chart...</div>}
                                                data={maxVolumeChartData}
                                                options={MaxVolumeChartOptions}
                                              />
                                            </div>
                                          </div>
                                        </>
                                        }
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                          )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default ProfilePage