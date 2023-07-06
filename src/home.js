import React from 'react';
import './css/style.css';
import './css/bootstrap.min.css';
import about from './img/about.jpg'
import { Link } from 'react-router-dom';


function Home() {
    return (
        <>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />

            <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', border: 'solid black' }}>
                <a className="text-decoration-none text-body pe-3" href=""><i className="bi bi-telephone me-2"></i>+012 345 6789</a>
                <span className="text-body">|</span>
                <a className="text-decoration-none text-body px-3" href=""><i className="bi bi-envelope me-2"></i>info@example.com</a>

                <Link to="blog" >Blog Grid</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to='blogdeatil' >Blog Detail</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="team" >Team</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="testimonial" >Testimonial</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="appointment" >Appointment</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="search">Search</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="signup">Signup</Link>

            </div>
            <div className="container-fluid py-2 border-bottom d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center">




                            </div>
                        </div>
                        <div className="col-md-6 text-center text-lg-end">
                            <div className="d-inline-flex align-items-center">
                                <a className="text-body px-2" href="">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="text-body px-2" href="">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="text-body px-2" href="">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a className="text-body px-2" href="">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a className="text-body ps-2" href="">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid sticky-top bg-white shadow-sm">
                <div className="container">
                    <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
                        <a href="index.html" className="navbar-brand">
                            <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-clinic-medical me-2"></i>Medinova</h1>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">

                                <Link to='/home' className="nav-item nav-link active">Home</Link>
                                <Link to="/about" className="nav-item nav-link">About</Link>
                                <Link to="/Service" className="nav-item nav-link">Service</Link>
                                <Link to="/pricing" className="nav-item nav-link">Pricing</Link>
                                <Link to="/contact" className="nav-item nav-link">Contact</Link>
                                <Link to="/login" className="nav-item nav-link">Login</Link>








                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default Home;