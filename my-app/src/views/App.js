import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Page/Layout";
import Home from "../Page/Home";
import Page from "../Page/Page";

import Partnership from "../Page/Partnership";
import Tour from "../Page/Tour";
import LoginForm from "../components/Login/LoginForm";
import RegisterForm from "../components/Register/RegisterForm";
import AOS from "aos";
import Blog from "../Page/Blog";
import BlogsDetails from "../Page/BlogDetails";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "../Page/About";
import ScrollToTop from "../utils/scrolltoTop";
import DesDetail from "../Page/DesDetail";
import BookingForm from "../Page/Booking";
import TourDetails from "../Page/TourDetails";







function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />


        <Routes>


          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="page" element={<Page />} />
            <Route path="about" element={<About />} />
            <Route path="partnership" element={<Partnership />} />
            <Route path="tour" element={<Tour />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blogs/:id" element={<BlogsDetails />} />
            <Route path="des/:id" element={<DesDetail />} />
            <Route path="/tours/:id" element={<TourDetails />} />





          </Route >
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/booking" element={<BookingForm />} />


        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App;
