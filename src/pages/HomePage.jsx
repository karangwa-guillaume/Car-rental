import React, { useEffect } from "react";
import $ from "jquery";
import WOW from "wowjs";

// 🔐 Patch getComputedStyle for WOW.js compatibility
const originalGetComputedStyle = window.getComputedStyle;
window.getComputedStyle = function (el) {
  if (!el) {
    return { getPropertyValue: () => "" };
  }

  try {
    const style = originalGetComputedStyle(el);
    return style?.getPropertyValue ? style : { getPropertyValue: () => "" };
  } catch (err) {
    console.warn("⚠️ getComputedStyle failed:", err);
    return { getPropertyValue: () => "" };
  }
};

// 🌐 Set global jQuery and WOW references
window.$ = $;
window.jQuery = $;
window.WOW = WOW.WOW;

// 🎨 Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/lib/animate/animate.min.css";
import "../assets/lib/owlcarousel/assets/owl.carousel.min.css";

// 🧩 Components
import Spinner from "../components/Spinner";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Features from "../components/Features";
import About from "../components/About";
import Services from "../components/Services";
import Categories from "../components/Categories";
import CarSteps from "../components/carSteps";
import Banner from "../components/Banner";
import FactCounter from "../components/FactCounter";
import Testimonial from "../components/Testimonial";
import Team from "../components/Team";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const HomePage = () => {
  useEffect(() => {
    const loadScripts = async () => {
      try {
        // 📦 Plugin scripts (after jQuery is ready)
        await import("../assets/lib/waypoints/waypoints.min.js");
        await import("../assets/lib/counterup/counterup.min.js");
        await import("../assets/lib/owlcarousel/owl.carousel.min.js");

        // 🚀 WOW.js animation
        new WOW.WOW().init();
        window.WOW?.sync?.();

        // 🧠 Main behavior logic
        await import("../assets/js/main.js");

        console.log("✅ HomePage: Scripts loaded successfully");
      } catch (error) {
        console.error("❌ Error loading HomePage scripts:", error);
      }
    };

    window.scrollTo(0, 0);
    loadScripts();
  }, []);

  return (
    <>
      <Spinner />
      <Topbar />
      <Navbar />
      <Carousel />
      <Features />
      <About />
      <Services />
      <Categories />
      <CarSteps />
      <Banner />
      <FactCounter />
      <Testimonial />
      <Team />
      <Blog />
      <Footer />
      <Copyright />
    </>
  );
};

export default HomePage;
