import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './home'
import About from './about'
import Services from './service';
import Pricing from './price'
import Contect from './Contect'
import Pages from './pages'
import BlogDetails from './BlogDetails'
import Team from './Team'
import Testimonial from './Testimonial'
import Appointment from './Appointment'
import Search from './search'
import Login from './login'
import Signup from './Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Home />
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/Service" element={<Services />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="blog" element={<Pages />} />
        <Route path="blogdeatil" element={<BlogDetails />} />
        <Route path="team" element={<Team />} />
        <Route path="testimonial" element={<Testimonial />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="search" element={<Search />} />
        <Route path="contact" element={<Contect />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        
      </Routes>
    </BrowserRouter>

  </>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
