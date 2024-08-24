import React, { useEffect, useState } from 'react'
import OneExercise from './OneExercise'
import { Exercise } from '../models/exercise'
import { useUser } from '../contexts/UserContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Tracker: React.FC = () => {
    const navigate = useNavigate();
    const [exercisesJSON, setExercisesJSON] = useState<Exercise[]>([]);
    const [exercisesAPI, setExercisesAPI] = useState<Exercise[]>([]);
    const [exercises, setExercises] = useState<Exercise[]>([]);

    useEffect(()=>{
        const fetchData = async () => {
            const response = await axios.get('/exercises.json');
            const exercisesArray: Exercise[] = response.data.exercises.map((exercise: any) => {
                return new Exercise(exercise.name, exercise.image, exercise.tag);
            });
            setExercisesJSON(exercisesArray);
        }
        fetchData();
    }, []);
    useEffect(()=>{
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://exercisedb.p.rapidapi.com/exercises',
                params: {
                    limit: '20',
                    offset: '0'
                },
                headers: {
                    'x-rapidapi-key': '4924bcd8e0msh7534f3a1caaf78ep18a4a6jsna73b9640cb8d',
                    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
                }
            };
            try {
                const response = await axios.request(options);
                const exercisesArray: Exercise[] = response.data.map((exercise: any) => {
                return new Exercise(exercise.name, exercise.gifUrl, exercise.target.charAt(0).toUpperCase() + exercise.target.slice(1));
            });
            setExercisesAPI(exercisesArray);
            } catch (error) {
                console.error(error);
            }   
        }
        fetchData();
    }, []);

    useEffect(() => {
        setExercises([...exercisesJSON, ...exercisesAPI]);
    }, [exercisesJSON, exercisesAPI]);


    const [selectedExercise, setSelectedExercise] = useState<string>('')

    const handleExerciseSelect = (exercise: string) => {
        setSelectedExercise(exercise)
        setSet(1)
        window.scrollTo({ top: 200, behavior: 'smooth' })
    }

    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const handleCategorySelect = (category: string) => {
      setSelectedCategory(category);
    };

    const [search, setSearch] = useState<string>('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value.toLowerCase());
    };

    const filteredExercises = exercises.filter(exercise => {
      const categoryMatch = selectedCategory === 'All' || exercise.tag === selectedCategory;
      const searchMatch = exercise.name.toLowerCase().includes(search) || exercise.tag.toLowerCase().includes(search);
      return categoryMatch && searchMatch;
    })

    const [currentPage, setCurrentPage] = useState<number>(1);
    const exercisesPerPage = 12;

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const totalPages = Array.from({length:Math.ceil(filteredExercises.length / exercisesPerPage)},(_, index) => index + 1);
    const currentExercises = filteredExercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const [reps, setReps] = useState<number>(0);
    const [set, setSet] = useState<number>(1);
    const [weight, setWeight] = useState<number>(0);
    const [rows, setRows] = useState<{ exercise: string; reps: number; set: number; weight: number }[]>([]);

    const handleAddRow = () => {
        if (selectedExercise === '' || reps === 0 || set === 0) {
            alert('Exercise or reps cannot be empty');
            return;
        }
        const newRow = { exercise: selectedExercise, reps: reps, set: set, weight: weight };
        setRows([...rows,  newRow]);
        setReps(0);
        setSet(set+1);
        setWeight(0);
        window.scrollTo({ top: 180 + (rows.length + 1) * 100, behavior: 'smooth' })
    };
    
    const handleDeleteRow = (index: number) => {
        const updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
    };

    const [currentUsername, setCurrentUsername] = useState<string>('');
    const { user } = useUser();

    useEffect(() => {
        if (user) {
            const loggedInUsername = user.username;
            setCurrentUsername(loggedInUsername);
        }
        else{
            alert('Please log in first');
            navigate('/login');
        }
    }, []);
    
    const handleFinishWorkout = async () => {
        const workoutData = {
            username: currentUsername,
            date: new Date().toISOString(),
            workoutData: rows
        }
        try {
            const response = await axios.post('http://localhost:5000/api/saveWorkout', workoutData);
            console.log('Workout saved successfully', response.data);
            alert('Workout saved successfully');
            setRows([]);
        } catch (error) {
            console.error('Error saving workout:', error);
        }
    };

    return (
    <>
    <section className="contact-form-main" style={{ height: "100%", margin: 0, marginTop: '5%', padding: 0 }}>
      <div className="container">
          <div>
            <div className="form-wrapper">
              <form id="contact-form">
                <div className="row" style={{justifyContent: 'space-between'}}>
                  <div>
                    <div className="form-box user-icon mb-30">
                      <input
                        style={{ textTransform: 'none' }}
                        type="text"
                        name="exercise"
                        placeholder="Selected exercise"
                        value={selectedExercise}
                        disabled
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className="form-box password-icon mb-30">
                      <input
                        style={{ textTransform: 'none' }}
                        type="text"
                        name="reps"
                        value={`Reps: ${reps}`}
                        onChange={(e) => setReps(Number(e.target.value.substring(e.target.value.indexOf(' ') + 1)))}
                        placeholder="Reps"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className="form-box password-icon mb-30">
                      <input
                        style={{ textTransform: 'none' }}
                        type="text"
                        name="set"
                        value={`Set: ${set}`}
                        onChange={(e) => setSet(Number(e.target.value.substring(e.target.value.indexOf(' ') + 1)))}
                        placeholder="Set"
                        disabled
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div className="form-box password-icon mb-30">
                      <input
                        style={{ textTransform: 'none' }}
                        type="text"
                        name="weight"
                        value={`Weight: ${weight}`}
                        onChange={(e) => setWeight(Number(e.target.value.substring(e.target.value.indexOf(' ') + 1)))}
                        placeholder="Weight / kg"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="submit-info">
                      <button className="btn" type='button' onClick={handleAddRow}>Add</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {rows.length > 0 && (
                <>
                    <div className="form-wrapper">
                        <form id="contact-form">
                            {rows.map((row, index) => (
                                <div className="row" style={{ justifyContent: 'space-between', paddingTop: '10px' }} key={index}>
                                    <div>
                                        <div className="form-box user-icon mb-30">
                                            <input
                                                style={{ textTransform: 'none' }}
                                                type="text"
                                                name="exercise"
                                                placeholder="Selected exercise"
                                                value={row.exercise}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-box password-icon mb-30">
                                            <input
                                                style={{ textTransform: 'none' }}
                                                type="number"
                                                name="reps"
                                                value={row.reps}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-box password-icon mb-30">
                                            <input
                                                style={{ textTransform: 'none' }}
                                                type="number"
                                                name="set"
                                                value={row.set}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-box password-icon mb-30">
                                            <input
                                                style={{ textTransform: 'none' }}
                                                type="number"
                                                name="weight"
                                                value={row.weight}
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="submit-info">
                                            <button className="btn" type="button" onClick={() => handleDeleteRow(index)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div>
                                <div className="submit-info" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <button className="btn" type="button" onClick={handleFinishWorkout}>Finish Workout</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </>
            )}
        </div>
      </div>
    </section>
    <section className="blog_area section-padding" style={{paddingTop: '3%'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="blog_right_sidebar" style={{ position: 'sticky', top: '140px', maxHeight: '600px', overflowY: 'auto', scrollbarWidth: 'none'}}>
                            <aside className="single_sidebar_widget search_widget">
                                <form action="#">
                                    <div className="form-group">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" value={search} onChange={handleSearchChange} placeholder='Search Exercises'/>
                                            <div className="input-group-append">
                                                <button className="btns" type="button"><i className="ti-search"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </aside>
                            <aside className="single_sidebar_widget post_category_widget">
                                <h4 className="widget_title" style={{color: '#2d2d2d'}}>Sport</h4>
                                <ul className="list cat-list">
                                    <li>
                                        <a onClick={() => handleCategorySelect('All')} className="d-flex">
                                            <p>All</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleCategorySelect('Basketball')} className="d-flex">
                                            <p>Basketball</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleCategorySelect('Tennis')} className="d-flex">
                                            <p>Tennis</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleCategorySelect('Football')} className="d-flex">
                                            <p>Football</p>
                                        </a>
                                    </li>
                                </ul>
                            </aside>
                            <aside className="single_sidebar_widget post_category_widget">
                                <h4 className="widget_title" style={{color: '#2d2d2d'}}>Category</h4>
                                <ul className="list cat-list">
                                    <li>
                                        <a onClick={() => handleCategorySelect('All')} className="d-flex">
                                            <p>All</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleCategorySelect('Abs')} className="d-flex">
                                            <p>Abs</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleCategorySelect('Back')} className="d-flex">
                                            <p>Back</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleCategorySelect('Cardio')} className="d-flex">
                                            <p>Cardio</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleCategorySelect('Chest')} className="d-flex">
                                            <p>Chest</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleCategorySelect('Full body')} className="d-flex">
                                            <p>Full body</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleCategorySelect('Legs')} className="d-flex">
                                            <p>Legs</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleCategorySelect('Shoulders')} className="d-flex">
                                            <p>Shoulders</p>
                                        </a>
                                    </li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                    <div className="col-lg-8 mb-5 mb-lg-0">
                        <div className ="blog_left_sidebar">
                            <section className='services-area'>
                                <div className='container'>
                                    <div className='row'>
                                        {currentExercises.map((exercise, index) =>(
                                            <OneExercise key={index} exercise={exercise} onSelect={() => handleExerciseSelect(exercise.name)}></OneExercise>
                                        ))}
                                    </div>
                                </div>
                            </section>
                            <nav className="blog-pagination justify-content-center d-flex">
                                <ul className="pagination">
                                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                                            <i className="ti-angle-left"></i>
                                        </button>
                                    </li>
                                    {totalPages.map((_, index) => (
                                        <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                                            <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                                                {index + 1}
                                            </button>
                                        </li>
                                    ))}
                                    <li className={`page-item ${currentPage === Math.ceil(filteredExercises.length / exercisesPerPage) ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(filteredExercises.length / exercisesPerPage)}>
                                            <i className="ti-angle-right"></i>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Tracker