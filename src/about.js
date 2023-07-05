import about from './img/about.jpg'
function About() {
    return (
        <>

            <html>            <head>
                <meta charSet="utf-8"></meta>
                <title>MEDINOVA - Hospital Website Template</title>
                <meta content="width=device-width, initial-scale=1.0" name="viewport"></meta>
                <meta content="Free HTML Templates" name="keywords"></meta>
                <meta content="Free HTML Templates" name="description"></meta>
                <link href="img/favicon.ico" rel="icon"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css" rel="stylesheet"></link>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet"></link>
                <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet"></link>
                <link href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet"></link> <link href="css/bootstrap.min.css" rel="stylesheet"></link>
                <link href="css/style.css" rel="stylesheet"></link>
            </head>
                <body>
                    <div class="container-fluid py-2 border-bottom d-none d-lg-block">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                                    <div class="d-inline-flex align-items-center">
                                        <a class="text-decoration-none text-body pe-3" href=""><i class="bi bi-telephone me-2"></i>+012 345 6789</a>
                                        <span class="text-body">|</span>
                                        <a class="text-decoration-none text-body px-3" href=""><i class="bi bi-envelope me-2"></i>info@example.com</a>
                                    </div>
                                </div>
                                <div class="col-md-6 text-center text-lg-end">
                                    <div class="d-inline-flex align-items-center">
                                        <a class="text-body px-2" href="">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                        <a class="text-body px-2" href="">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                        <a class="text-body px-2" href="">
                                            <i class="fab fa-linkedin-in"></i>
                                        </a>
                                        <a class="text-body px-2" href="">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                        <a class="text-body ps-2" href="">
                                            <i class="fab fa-youtube"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid sticky-top bg-white shadow-sm mb-5">
                        <div class="container">
                            <nav class="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
                                <a href="index.html" class="navbar-brand">
                                    <h1 class="m-0 text-uppercase text-primary"><i class="fa fa-clinic-medical me-2"></i>Medinova</h1>
                                </a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarCollapse">
                                    <div class="navbar-nav ms-auto py-0">
                                        <a href="index.html" class="nav-item nav-link">Home</a>
                                        <a href="about.html" class="nav-item nav-link active">About</a>
                                        <a href="service.html" class="nav-item nav-link">Service</a>
                                        <a href="price.html" class="nav-item nav-link">Pricing</a>
                                        <div class="nav-item dropdown">
                                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                            <div class="dropdown-menu m-0">
                                                <a href="blog.html" class="dropdown-item">Blog Grid</a>
                                                <a href="detail.html" class="dropdown-item">Blog Detail</a>
                                                <a href="team.html" class="dropdown-item">The Team</a>
                                                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                                <a href="appointment.html" class="dropdown-item">Appointment</a>
                                                <a href="search.html" class="dropdown-item">Search</a>
                                            </div>
                                        </div>
                                        <a href="contact.html" class="nav-item nav-link">Contact</a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>

                    <div class="container-fluid py-5">
                        <div class="container">
                            <div class="row gx-5">
                                <div class="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: "500px" }}>
                                    <div class="position-relative h-100">
                                        <img class="position-absolute w-100 h-100 rounded" style={{ objectFit: 'cover' }} src={about}></img>
                                    </div>
                                </div>
                                <div class="col-lg-7">
                                    <div class="mb-4">
                                        <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">About Us</h5>
                                        <h1 class="display-4">Best Medical Care For Yourself and Your Family</h1>
                                    </div>
                                    <p>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                                    <div class="row g-3 pt-3">
                                        <div class="col-sm-3 col-6">
                                            <div class="bg-light text-center rounded-circle py-4">
                                                <i class="fa fa-3x fa-user-md text-primary mb-3"></i>
                                                <h6 class="mb-0">Qualified<small class="d-block text-primary">Doctors</small></h6>
                                            </div>
                                        </div>
                                        <div class="col-sm-3 col-6">
                                            <div class="bg-light text-center rounded-circle py-4">
                                                <i class="fa fa-3x fa-procedures text-primary mb-3"></i>
                                                <h6 class="mb-0">Emergency<small class="d-block text-primary">Services</small></h6>
                                            </div>
                                        </div>
                                        <div class="col-sm-3 col-6">
                                            <div class="bg-light text-center rounded-circle py-4">
                                                <i class="fa fa-3x fa-microscope text-primary mb-3"></i>
                                                <h6 class="mb-0">Accurate<small class="d-block text-primary">Testing</small></h6>
                                            </div>
                                        </div>
                                        <div class="col-sm-3 col-6">
                                            <div class="bg-light text-center rounded-circle py-4">
                                                <i class="fa fa-3x fa-ambulance text-primary mb-3"></i>
                                                <h6 class="mb-0">Free<small class="d-block text-primary">Ambulance</small></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid bg-primary my-5 py-5">
                        <div class="container py-5">
                            <div class="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                                <h5 class="d-inline-block text-white text-uppercase border-bottom border-5">Find A Doctor</h5>
                                <h1 class="display-4 mb-4">Find A Healthcare Professionals</h1>
                                <h5 class="text-white fw-normal">Duo ipsum erat stet dolor sea ut nonumy tempor. Tempor duo lorem eos sit sed ipsum takimata ipsum sit est. Ipsum ea voluptua ipsum sit justo</h5>
                            </div>
                            <div class="mx-auto" style={{ width: "100%", maxWidth: '600px' }}>
                                <div class="input-group">
                                    <select class="form-select border-primary w-25" style={{ height: "60px" }}>
                                        <option selected>Department</option>
                                        <option value="1">Department 1</option>
                                        <option value="2">Department 2</option>
                                        <option value="3">Department 3</option>
                                    </select>
                                    <input type="text" class="form-control border-primary w-50" placeholder="Keyword"></input>
                                    <button class="btn btn-dark border-0 w-25">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid py-5">
                        <div class="container">
                            <div class="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                                <h5 class="d-inline-block text-primary text-uppercase border-bottom border-5">Our Doctors</h5>
                                <h1 class="display-4">Qualified Healthcare Professionals</h1>
                            </div>
                            <div class="owl-carousel team-carousel position-relative">
                                <div class="team-item">
                                    <div class="row g-0 bg-light rounded overflow-hidden">
                                        <div class="col-12 col-sm-5 h-100">
                                            <img class="img-fluid h-100" src={require("./img/team-1.jpg").default} style={{ objectFit: "cover" }}></img>
                                        </div>
                                        <div class="col-12 col-sm-7 h-100 d-flex flex-column">
                                            <div class="mt-auto p-4">
                                                <h3>Doctor Name</h3>
                                                <h6 class="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                                <p class="m-0">Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor</p>
                                            </div>
                                            <div class="d-flex mt-auto border-top p-4">
                                                <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i class="fab fa-twitter"></i></a>
                                                <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i class="fab fa-facebook-f"></i></a>
                                                <a class="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i class="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="team-item">
                                    <div class="row g-0 bg-light rounded overflow-hidden">
                                        <div class="col-12 col-sm-5 h-100">
                                            <img class="img-fluid h-100" src={require("./img/team-2.jpg").default} style={{ objectFit: "cover" }}></img>
                                        </div>
                                        <div class="col-12 col-sm-7 h-100 d-flex flex-column">
                                            <div class="mt-auto p-4">
                                                <h3>Doctor Name</h3>
                                                <h6 class="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                                <p class="m-0">Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor</p>
                                            </div>
                                            <div class="d-flex mt-auto border-top p-4">
                                                <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i class="fab fa-twitter"></i></a>
                                                <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i class="fab fa-facebook-f"></i></a>
                                                <a class="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i class="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="team-item">
                                    <div class="row g-0 bg-light rounded overflow-hidden">
                                        <div class="col-12 col-sm-5 h-100">
                                            <img class="img-fluid h-100" src={require("./img/team-3.jpg").default} style={{ objectFit: "cover" }}></img>
                                        </div>
                                        <div class="col-12 col-sm-7 h-100 d-flex flex-column">
                                            <div class="mt-auto p-4">
                                                <h3>Doctor Name</h3>
                                                <h6 class="fw-normal fst-italic text-primary mb-4">Cardiology Specialist</h6>
                                                <p class="m-0">Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor</p>
                                            </div>
                                            <div class="d-flex mt-auto border-top p-4">
                                                <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i class="fab fa-twitter"></i></a>
                                                <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i class="fab fa-facebook-f"></i></a>
                                                <a class="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i class="fab fa-linkedin-in"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid bg-dark text-light mt-5 py-5">
                        <div class="container py-5">
                            <div class="row g-5">
                                <div class="col-lg-3 col-md-6">
                                    <h4 class="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Get In Touch</h4>
                                    <p class="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor</p>
                                    <p class="mb-2"><i class="fa fa-map-marker-alt text-primary me-3"></i>123 Street, New York, USA</p>
                                    <p class="mb-2"><i class="fa fa-envelope text-primary me-3"></i>info@example.com</p>
                                    <p class="mb-0"><i class="fa fa-phone-alt text-primary me-3"></i>+012 345 67890</p>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <h4 class="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Quick Links</h4>
                                    <div class="d-flex flex-column justify-content-start">
                                        <a class="text-light mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Home</a>
                                        <a class="text-light mb-2" href="#"><i class="fa fa-angle-right me-2"></i>About Us</a>
                                        <a class="text-light mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Our Services</a>
                                        <a class="text-light mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Meet The Team</a>
                                        <a class="text-light mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Latest Blog</a>
                                        <a class="text-light" href="#"><i class="fa fa-angle-right me-2"></i>Contact Us</a>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <h4 class="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Popular Links</h4>
                                    <div class="d-flex flex-column justify-content-start">
                                        <a class="text-light mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Home</a>
                                        <a class="text-light mb-2" href="#"><i class="fa fa-angle-right me-2"></i>About Us</a>
                                        <a class="text-light mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Our Services</a>
                                        <a class="text-light mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Meet The Team</a>
                                        <a class="text-light mb-2" href="#"><i class="fa fa-angle-right me-2"></i>Latest Blog</a>
                                        <a class="text-light" href="#"><i class="fa fa-angle-right me-2"></i>Contact Us</a>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6">
                                    <h4 class="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Newsletter</h4>
                                    <form action="">
                                        <div class="input-group">
                                            <input type="text" class="form-control p-3 border-0" placeholder="Your Email Address"></input>
                                            <button class="btn btn-primary">Sign Up</button>
                                        </div>
                                    </form>
                                    <h6 class="text-primary text-uppercase mt-4 mb-3">Follow Us</h6>
                                    <div class="d-flex">
                                        <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                                        <a class="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid bg-dark text-light border-top border-secondary py-4">
                        <div class="container">
                            <div class="row g-5">
                                <div class="col-md-6 text-center text-md-start">
                                    <p class="mb-md-0">&copy; <a class="text-primary" href="#">Your Site Name</a>. All Rights Reserved.</p>
                                </div>
                                <div class="col-md-6 text-center text-md-end">
                                    <p class="mb-0">Designed by <a class="text-primary" href="https://htmlcodex.com">HTML Codex</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
                    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
                    <script src="lib/easing/easing.min.js"></script>
                    <script src="lib/waypoints/waypoints.min.js"></script>
                    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
                    <script src="lib/tempusdominus/js/moment.min.js"></script>
                    <script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
                    <script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>
                    <script src="js/main.js"></script>
                </body>
            </html>
        </>
    )
}
export default About;