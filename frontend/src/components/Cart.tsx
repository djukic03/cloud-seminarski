import React, { useEffect, useState } from 'react'
import { useUser } from '../contexts/UserContext';

interface CartProps {
    name: string;
    price: string;
}

const Cart: React.FC<CartProps> = ({name, price}) => {

    const [program, setProgram] = useState<string>(() => {
        return localStorage.getItem('program') || name;
    });
    const [money, setMoney] = useState<string>(() => {
        return localStorage.getItem('money') || price;
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        localStorage.setItem('program', program);
        localStorage.setItem('money', money);
    }, [program, money]);

    const handleRemove = () => {
        setProgram('');
        setMoney('');
    }

    const handleCheckout = () => {
        setProgram('');
        setMoney('');
        alert('Checkout successful! Check your email for receipt.');
    }

    const { user } = useUser();
    const [fullName, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [note, setNote] = useState<string>('');
    
    useEffect(() => {
        if (user) {
          setFullName(user.fullName);
          setEmail(user.email);
        }
      }, []);

  return (
    <main >
        <div className="slider-area2">
            <div className="slider-height2 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap hero-cap2 text-center pt-70">
                                <h2>Your Cart</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className='cart-section section-padding'>
            <div className='container'>
                <div className='row'>
                    <div className='one-section col-12'>
                        <h1>Product information:</h1>
                        <div className='row' style={{alignItems: 'center', marginTop:'2%'}}>
                            <table className='cart-table' style={{flex: 1}}>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{program}</td>
                                        <td>{money}</td>
                                        <td>1</td>
                                        <td>{money}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button className='btn' style={{height: '50px'}} onClick={handleRemove}>Remove</button>
                        </div>
                    </div>
                    <div className='col-12 mt-25'>
                        <h1>User information:</h1>
                        <section className="contact-form-main" style={{ height: '100%', margin: 0 }}>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div style={{ width: '100%' }}>
                                        <div className="form-wrapper" style={{backgroundColor: "white"}}>
                                            <form id="contact-form" style={{padding: 0}}>
                                                <div className="">
                                                    <div className="col-lg-12 col-md-6">
                                                        <div className="form-box user-icon mb-30" style={{ display: 'flex', flexDirection: 'row'}}>
                                                            <p style={{ margin: 0, alignContent: 'center', whiteSpace: 'nowrap'}}>Name: </p>
                                                            <input type="text" name="name" style={{ textTransform: 'none' }} placeholder="Name" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-6">
                                                        <div className="form-box user-icon mb-30" style={{ display: 'flex', flexDirection: 'row'}}>
                                                            <p style={{ margin: 0, alignContent: 'center', whiteSpace: 'nowrap'}}>Email: </p>
                                                            <input type="email" name="email" style={{ textTransform: 'none' }} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-6">
                                                        <div className="form-box user-icon mb-30" style={{ display: 'flex', flexDirection: 'row'}}>
                                                            <p style={{ margin: 0, alignContent: 'center', whiteSpace: 'nowrap'}}>Phone: </p>
                                                            <input type="tel" name="phone" style={{ textTransform: 'none' }} placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-6">
                                                        <div className="form-box user-icon mb-30" style={{ display: 'flex', flexDirection: 'column'}}>
                                                            <p style={{ margin: 0, alignContent: 'center', whiteSpace: 'nowrap'}}>Note: </p>
                                                            <textarea style={{ textTransform: 'none', padding: '0' }} name="note" value={note} onChange={(e) => setNote(e.target.value)}/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12" style={{ marginTop: '70px' }}>
                                                        <div className="submit-info">
                                                            <button className="btn" type='button' onClick={handleCheckout}>Buy</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Cart