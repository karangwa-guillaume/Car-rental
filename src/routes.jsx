import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import CarsPage from './pages/CarsPage';
import ContactPage from './pages/Contactpage';
import FeaturePage from './pages/FeaturePage';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import ServicePage from "./pages/ServicePage";
import TeamPage from './pages/TeamPage';
import TestimonialPage from './pages/TestimonialPage';
import BookingPage from './pages/BookingPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';

export default function RouteElements() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
       <Route path="/about" element={<AboutPage/>}/>
      <Route path="/service" element={<ServicePage />} />
      <Route path="/blog" element={<BlogPage/>}/>
      <Route path="cars" element={<CarsPage/>}/> 
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/features" element={<FeaturePage/>}/>  
      <Route path="/team" element={<TeamPage/>}/>
      <Route path="/testimonial" element={<TestimonialPage/>}/>
      <Route path="/booking" element={<BookingPage />} />  
      <Route path="/signup" element={<SignupPage/>}/> 
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/adminDashboard" element={<AdminDashboard/>}/>

    </Routes>
  );
}