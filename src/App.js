import './App.css';
import testi1 from './img/testimonial-1.jpg'
import testi2 from './img/testimonial-2.jpg'
import testi3 from './img/testimonial-3.jpg'

import about from './img/about.jpg'

import price1 from './img/price-1.jpg'
import price2 from './img/price-2.jpg'
import price3 from './img/price-3.jpg'

import blog1 from "./img/blog-1.jpg"
import blog2 from "./img/blog-2.jpg"
import blog3 from "./img/blog-3.jpg"

import user from './img/user.jpg'

import team1 from './img/team-1.jpg'
import team2 from './img/team-2.jpg'
import team3 from './img/team-3.jpg'
function App() {
  return (
    <>
     
     <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                    <div className="container py-5">
                        <div className="row justify-content-start">
                            <div className="col-lg-8 text-center text-lg-start">
                                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5" style={{ borderColor: "rgba(256, 256, 256, .3)" }}>Welcome To Medinova</h5>
                                <h1 className="display-1 text-white mb-md-4">Best Healthcare Solution In Your City</h1>
                                <div className="pt-2">
                                    <a href="" className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2">Find Doctor</a>
                                    <a href="" className="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2">Appointment</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="row gx-5">
                            <div className="col-lg-5 mb-5 mb-lg-0" style={{ minheight: "500px" }}>
                                <div className="position-relative h-100">
                                    <img className="position-absolute w-100 h-100 rounded" src={about} style={{ objectFit: "cover" }}></img>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="mb-4">
                                    <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">About Us</h5>
                                    <h1 className="display-4">Best Medical Care For Yourself and Your Family</h1>
                                </div>
                                <p>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                                <div className="row g-3 pt-3">
                                    <div className="col-sm-3 col-6">
                                        <div className="bg-light text-center rounded-circle py-4">
                                            <i className="fa fa-3x fa-user-md text-primary mb-3"></i>
                                            <h6 className="mb-0">Qualified<small className="d-block text-primary">Doctors</small></h6>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 col-6">
                                        <div className="bg-light text-center rounded-circle py-4">
                                            <i className="fa fa-3x fa-procedures text-primary mb-3"></i>
                                            <h6 className="mb-0">Emergency<small className="d-block text-primary">Services</small></h6>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 col-6">
                                        <div className="bg-light text-center rounded-circle py-4">
                                            <i className="fa fa-3x fa-microscope text-primary mb-3"></i>
                                            <h6 className="mb-0">Accurate<small className="d-block text-primary">Testing</small></h6>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 col-6">
                                        <div className="bg-light text-center rounded-circle py-4">
                                            <i className="fa fa-3x fa-ambulance text-primary mb-3"></i>
                                            <h6 className="mb-0">Free<small className="d-block text-primary">Ambulance</small></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Services</h5>
                            <h1 className="display-4">Excellent Medical Services</h1>
                        </div>
                        <div className="row g-5">
                            <div className="col-lg-4 col-md-6">
                                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                    <div className="service-icon mb-4">
                                        <i className="fa fa-2x fa-user-md text-white"></i>
                                    </div>
                                    <h4 className="mb-3">Emergency Care</h4>
                                    <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                                    <a className="btn btn-lg btn-primary rounded-pill" href="">
                                        <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                    <div className="service-icon mb-4">
                                        <i className="fa fa-2x fa-procedures text-white"></i>
                                    </div>
                                    <h4 className="mb-3">Operation & Surgery</h4>
                                    <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                                    <a className="btn btn-lg btn-primary rounded-pill" href="">
                                        <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                    <div className="service-icon mb-4">
                                        <i className="fa fa-2x fa-stethoscope text-white"></i>
                                    </div>
                                    <h4 className="mb-3">Outdoor Checkup</h4>
                                    <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                                    <a className="btn btn-lg btn-primary rounded-pill" href="">
                                        <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                    <div className="service-icon mb-4">
                                        <i className="fa fa-2x fa-ambulance text-white"></i>
                                    </div>
                                    <h4 className="mb-3">Ambulance Service</h4>
                                    <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                                    <a className="btn btn-lg btn-primary rounded-pill" href="">
                                        <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                    <div className="service-icon mb-4">
                                        <i className="fa fa-2x fa-pills text-white"></i>
                                    </div>
                                    <h4 className="mb-3">Medicine & Pharmacy</h4>
                                    <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                                    <a className="btn btn-lg btn-primary rounded-pill" href="">
                                        <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                    <div className="service-icon mb-4">
                                        <i className="fa fa-2x fa-microscope text-white"></i>
                                    </div>
                                    <h4 className="mb-3">Blood Testing</h4>
                                    <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit</p>
                                    <a className="btn btn-lg btn-primary rounded-pill" href="">
                                        <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid bg-primary my-5 py-5">
                    <div className="container py-5">
                        <div className="row gx-5">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="mb-4">
                                    <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Appointment</h5>
                                    <h1 className="display-4">Make An Appointment For Your Family</h1>
                                </div>
                                <p className="text-white mb-5">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                                <a className="btn btn-dark rounded-pill py-3 px-5 me-3" href="">Find Doctor</a>
                                <a className="btn btn-outline-dark rounded-pill py-3 px-5" href="">Read More</a>
                            </div>
                            <div className="col-lg-6">
                                <div className="bg-white text-center rounded p-5">
                                    <h1 className="mb-4">Book An Appointment</h1>
                                    <form>
                                        <div className="row g-3">
                                            <div className="col-12 col-sm-6">
                                                <select className="form-select bg-light border-0" style={{ height: "55px" }}>
                                                    <option selected>Choose Department</option>
                                                    <option defaultValue="1">Department 1</option>
                                                    <option defaultValue="2">Department 2</option>
                                                    <option defaultValue="3">Department 3</option>
                                                </select>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <select className="form-select bg-light border-0" style={{ height: "55px" }}>
                                                    <option selected>Select Doctor</option>
                                                    <option defaultValue="1">Doctor 1</option>
                                                    <option defaultValue="2">Doctor 2</option>
                                                    <option defaultValue="3">Doctor 3</option>
                                                </select>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <input type="text" className="form-control bg-light border-0" placeholder="Your Name" style={{ height: "55px" }}></input>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <input type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{ height: "55px" }}></input>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="date" id="date" data-target-input="nearest">
                                                    <input type="text"
                                                        className="form-control bg-light border-0 datetimepicker-input"
                                                        placeholder="Date" data-target="#date" data-toggle="datetimepicker" style={{ height: "55px" }}></input>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="time" id="time" data-target-input="nearest">
                                                    <input type="text"
                                                        className="form-control bg-light border-0 datetimepicker-input"
                                                        placeholder="Time" data-target="#time" data-toggle="datetimepicker" style={{ height: "55px" }}></input>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100 py-3" type="submit">Make An Appointment</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Medical Packages</h5>
                            <h1 className="display-4">Awesome Medical Programs</h1>
                        </div>
                        <div className="owl-carousel price-carousel position-relative" style={{ padding: "0 45px 45px 45px" }}>
                            <div className="bg-light rounded text-center">
                                <div className="position-relative">
                                    <img className="img-fluid rounded-top" src={testi1} alt=""></img>
                                    <div className="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center" style={{ background: "rgba(29, 42, 77, .8);" }}>
                                        <h3 className="text-white">Pregnancy Care</h3>
                                        <h1 className="display-4 text-white mb-0">
                                            <small className="align-top fw-normal" style={{ fontSize: "22px", lineHeight: "45px" }}>$</small>49<small className="align-bottom fw-normal" style={{ fontSize: "16px", lineheight: "40px" }}>/ Year</small>
                                        </h1>
                                    </div>
                                </div>
                                <div className="text-center py-5">
                                    <p>Emergency Medical Treatment</p>
                                    <p>Highly Experienced Doctors</p>
                                    <p>Highest Success Rate</p>
                                    <p>Telephone Service</p>
                                    <a href="" className="btn btn-primary rounded-pill py-3 px-5 my-2">Apply Now</a>
                                </div>
                            </div>
                            <div className="bg-light rounded text-center">
                                <div className="position-relative">
                                    <img className="img-fluid rounded-top" src={price2} alt=""></img>
                                    <div className="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center" style={{ background: "rgba(29, 42, 77, .8)" }}>
                                        <h3 className="text-white">Health Checkup</h3>
                                        <h1 className="display-4 text-white mb-0">
                                            <small className="align-top fw-normal" style={{ fontSize: "22px", lineHeight: "45px" }}>$</small>99<small className="align-bottom fw-normal" style={{ fontSize: "16px", lineHeight: "40px" }}>/ Year</small>
                                        </h1>
                                    </div>
                                </div>
                                <div className="text-center py-5">
                                    <p>Emergency Medical Treatment</p>
                                    <p>Highly Experienced Doctors</p>
                                    <p>Highest Success Rate</p>
                                    <p>Telephone Service</p>
                                    <a href="" className="btn btn-primary rounded-pill py-3 px-5 my-2">Apply Now</a>
                                </div>
                            </div>
                            <div className="bg-light rounded text-center">
                                <div className="position-relative">
                                    <img className="img-fluid rounded-top" src={price3} alt=""></img>
                                    <div className="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center" style={{ "background": "rgba(29, 42, 77, .8);" }}>
                                        <h3 className="text-white">Dental Care</h3>
                                        <h1 className="display-4 text-white mb-0">
                                            <small className="align-top fw-normal" style={{ "font-size": "22px;", "line-height": "45px;" }}>$</small>149<small className="align-bottom fw-normal" style={{ fontSize: "16px", lineHeight: "40px" }}>/ Year</small>
                                        </h1>
                                    </div>
                                </div>
                                <div className="text-center py-5">
                                    <p>Emergency Medical Treatment</p>
                                    <p>Highly Experienced Doctors</p>
                                    <p>Highest Success Rate</p>
                                    <p>Telephone Service</p>
                                    <a href="" className="btn btn-primary rounded-pill py-3 px-5 my-2">Apply Now</a>
                                </div>
                            </div>
                            <div className="bg-light rounded text-center">
                                <div className="position-relative">
                                    <img className="img-fluid rounded-top" src={price1} alt=""></img>
                                    <div className="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center" style={{ background: "rgba(29, 42, 77, .8)" }}>
                                        <h3 className="text-white">Operation & Surgery</h3>
                                        <h1 className="display-4 text-white mb-0">
                                            <small className="align-top fw-normal" style={{ fontSize: "22px", lineHeight: '45px' }}>$</small>199<small className="align-bottom fw-normal" style={{ fontSize: "16px", lineHeight: "40px" }}>/ Year</small>
                                        </h1>
                                    </div>
                                </div>
                                <div className="text-center py-5">
                                    <p>Emergency Medical Treatment</p>
                                    <p>Highly Experienced Doctors</p>
                                    <p>Highest Success Rate</p>
                                    <p>Telephone Service</p>
                                    <a href="" className="btn btn-primary rounded-pill py-3 px-5 my-2">Apply Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Our Doctors</h5>
                            <h1 className="display-4">Qualified Healthcare Professionals</h1>
                        </div>
                        <div className="owl-carousel team-carousel position-relative">
                            <div className="team-item">
                                <div className="row g-0 bg-light rounded overflow-hidden">
                                    <div className="col-12 col-sm-5 h-100">
                                        <img className="img-fluid h-100" src={team1} style={{ objectFit: "cover" }}></img>
                                    </div>
                                    <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                                        <div className="mt-auto p-4">
                                            <h3>Doctor Name</h3>
                                            <h6 className="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                            <p className="m-0">Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor</p>
                                        </div>
                                        <div className="d-flex mt-auto border-top p-4">
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="!#"><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="!#"><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="!#"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="team-item">
                                <div className="row g-0 bg-light rounded overflow-hidden">
                                    <div className="col-12 col-sm-5 h-100">
                                        <img className="img-fluid h-100" src={team2} style={{ objectFit: "cover" }}></img>
                                    </div>
                                    <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                                        <div className="mt-auto p-4">
                                            <h3>Doctor Name</h3>
                                            <h6 className="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                            <p className="m-0">Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor</p>
                                        </div>
                                        <div className="d-flex mt-auto border-top p-4">
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="!#"><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="!#"><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="!#"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="team-item">
                                <div className="row g-0 bg-light rounded overflow-hidden">
                                    <div className="col-12 col-sm-5 h-100">
                                        <img className="img-fluid h-100" src={team3} style={{ objectFit: "cover" }}></img>
                                    </div>
                                    <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                                        <div className="mt-auto p-4">
                                            <h3>Doctor Name</h3>
                                            <h6 className="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                            <p className="m-0">Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor</p>
                                        </div>
                                        <div className="d-flex mt-auto border-top p-4">
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="!#"><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="!#"><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="!#"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid bg-primary my-5 py-5">
                    <div className="container py-5">
                        <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                            <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Find A Doctor</h5>
                            <h1 className="display-4 mb-4">Find A Healthcare Professionals</h1>
                            <h5 className="text-white fw-normal">Duo ipsum erat stet dolor sea ut nonumy tempor. Tempor duo lorem eos sit sed ipsum takimata ipsum sit est. Ipsum ea voluptua ipsum sit justo</h5>
                        </div>
                        <div className="mx-auto" style={{ width: "100%", maxWidth: "600px" }}>
                            <div className="input-group">
                                <select className="form-select border-primary w-25" style={{ height: "60px" }}>
                                    <option selected>Department</option>
                                    <option value="1">Department 1</option>
                                    <option value="2">Department 2</option>
                                    <option value="3">Department 3</option>
                                </select>
                                <input type="text" className="form-control border-primary w-50" placeholder="Keyword"></input>
                                <button className="btn btn-dark border-0 w-25">Search</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Testimonial</h5>
                            <h1 className="display-4">Patients Say About Our Services</h1>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="owl-carousel testimonial-carousel">
                                    <div className="testimonial-item text-center">
                                        <div className="position-relative mb-5">
                                            <img className="img-fluid rounded-circle mx-auto" src={testi1} alt=""></img>
                                            <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: "60px", height: "60px" }}>
                                                <i className="fa fa-quote-left fa-2x text-primary"></i>
                                            </div>
                                        </div>
                                        <p className="fs-4 fw-normal">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.</p>
                                        <hr className="w-25 mx-auto"></hr>
                                        <h3>Patient Name</h3>
                                        <h6 className="fw-normal text-primary mb-3">Profession</h6>
                                    </div>
                                    <div className="testimonial-item text-center">
                                        <div className="position-relative mb-5">
                                            <img className="img-fluid rounded-circle mx-auto" src={testi2} alt=""></img>
                                            <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: "60px", height: "60px" }}>
                                                <i className="fa fa-quote-left fa-2x text-primary"></i>
                                            </div>
                                        </div>
                                        <p className="fs-4 fw-normal">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.</p>
                                        <hr className="w-25 mx-auto"></hr>
                                        <h3>Patient Name</h3>
                                        <h6 className="fw-normal text-primary mb-3">Profession</h6>
                                    </div>
                                    <div className="testimonial-item text-center">
                                        <div className="position-relative mb-5">
                                            <img className="img-fluid rounded-circle mx-auto" src={testi3} alt=""></img>
                                            <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: "60px", height: "60px" }}>
                                                <i className="fa fa-quote-left fa-2x text-primary"></i>
                                            </div>
                                        </div>
                                        <p className="fs-4 fw-normal">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.</p>
                                        <hr className="w-25 mx-auto"></hr>
                                        <h3>Patient Name</h3>
                                        <h6 className="fw-normal text-primary mb-3">Profession</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Blog Post</h5>
                            <h1 className="display-4">Our Latest Medical Blog Posts</h1>
                        </div>
                        <div className="row g-5">
                            <div className="col-xl-4 col-lg-6">
                                <div className="bg-light rounded overflow-hidden">
                                    <img className="img-fluid w-100" src={blog1} alt=""></img>
                                    <div className="p-4">
                                        <a className="h3 d-block mb-3" href="">Dolor clita vero elitr sea stet dolor justo  diam</a>
                                        <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                            rebum clita rebum dolor stet amet justo</p>
                                    </div>
                                    <div className="d-flex justify-content-between border-top p-4">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle me-2" src={user} width="25" height="25" alt=""></img>
                                            <small>John Doe</small>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <small className="ms-3"><i className="far fa-eye text-primary me-1"></i>12345</small>
                                            <small className="ms-3"><i className="far fa-comment text-primary me-1"></i>123</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="bg-light rounded overflow-hidden">
                                    <img className="img-fluid w-100" src={blog2} alt=""></img>
                                    <div className="p-4">
                                        <a className="h3 d-block mb-3" href="">Dolor clita vero elitr sea stet dolor justo  diam</a>
                                        <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                            rebum clita rebum dolor stet amet justo</p>
                                    </div>
                                    <div className="d-flex justify-content-between border-top p-4">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle me-2" src={user} width="25" height="25" alt=""></img>
                                            <small>John Doe</small>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <small className="ms-3"><i className="far fa-eye text-primary me-1"></i>12345</small>
                                            <small className="ms-3"><i className="far fa-comment text-primary me-1"></i>123</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="bg-light rounded overflow-hidden">
                                    <img className="img-fluid w-100" src={blog3} alt=""></img>
                                    <div className="p-4">
                                        <a className="h3 d-block mb-3" href="">Dolor clita vero elitr sea stet dolor justo  diam</a>
                                        <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                            rebum clita rebum dolor stet amet justo</p>
                                    </div>
                                    <div className="d-flex justify-content-between border-top p-4">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle me-2" src={user} width="25" height="25" alt=""></img>
                                            <small>John Doe</small>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <small className="ms-3"><i className="far fa-eye text-primary me-1"></i>12345</small>
                                            <small className="ms-3"><i className="far fa-comment text-primary me-1"></i>123</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="container-fluid bg-dark text-light mt-5 py-5">
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-lg-3 col-md-6">
                                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Get In Touch</h4>
                                <p className="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor</p>
                                <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3"></i>123 Street, New York, USA</p>
                                <p className="mb-2"><i className="fa fa-envelope text-primary me-3"></i>info@example.com</p>
                                <p className="mb-0"><i className="fa fa-phone-alt text-primary me-3"></i>+012 345 67890</p>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Quick Links</h4>
                                <div className="d-flex flex-column justify-content-start">
                                    <a className="text-light mb-2" href="!#"><i className="fa fa-angle-right me-2"></i>Home</a>
                                    <a className="text-light mb-2" href="!#"><i className="fa fa-angle-right me-2"></i>About Us</a>
                                    <a className="text-light mb-2" href="!#"><i className="fa fa-angle-right me-2"></i>Our Services</a>
                                    <a className="text-light mb-2" href="!#"><i className="fa fa-angle-right me-2"></i>Meet The Team</a>
                                    <a className="text-light mb-2" href="!#"><i className="fa fa-angle-right me-2"></i>Latest Blog</a>
                                    <a className="text-light" href="!#"><i className="fa fa-angle-right me-2"></i>Contact Us</a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Popular Links</h4>
                                <div className="d-flex flex-column justify-content-start">
                                    <a className="text-light mb-2" href="!#"><i className="fa fa-angle-right me-2"></i>Home</a>
                                    <a className="text-light mb-2" href="!#"><i className="fa fa-angle-right me-2"></i>About Us</a>
                                    <a className="text-light mb-2" href="!#"><i className="fa fa-angle-right me-2"></i>Our Services</a>
                                    <a className="text-light mb-2" href="!#"><i className="fa fa-angle-right me-2"></i>Meet The Team</a>
                                    <a className="text-light mb-2" href="!#"><i className="fa fa-angle-right me-2"></i>Latest Blog</a>
                                    <a className="text-light" href="!#"><i className="fa fa-angle-right me-2"></i>Contact Us</a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Newsletter</h4>
                                <form action="">
                                    <div className="input-group">
                                        <input type="text" className="form-control p-3 border-0" placeholder="Your Email Address"></input>
                                        <button className="btn btn-primary">Sign Up</button>
                                    </div>
                                </form>
                                <h6 className="text-primary text-uppercase mt-4 mb-3">Follow Us</h6>
                                <div className="d-flex">
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="!#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="!#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="!#"><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="!#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-dark text-light border-top border-secondary py-4">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-md-6 text-center text-md-start">
                                <p className="mb-md-0">&copy; <a className="text-primary" href="!#">Your Site Name</a>. All Rights Reserved.</p>
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <p className="mb-0">Designed by <a className="text-primary" href="https://htmlcodex.com">HTML Codex</a></p>
                            </div>
                        </div>
                    </div>
                </div>




                <a href="!#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>



                <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
                <script src="lib/easing/easing.min.js"></script>
                <script src="lib/waypoints/waypoints.min.js"></script>
                <script src="lib/owlcarousel/owl.carousel.min.js"></script>
                <script src="lib/tempusdominus/js/moment.min.js"></script>
                <script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
                <script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>
                <script src="js/main.js"></script>


    </>
  );
}

export default App;
