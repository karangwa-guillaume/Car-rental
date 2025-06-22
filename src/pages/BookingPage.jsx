import React, { useEffect } from "react";
import { useLocation } from "react-router-dom"; // 👈 NEW

import Spinner from "../components/Spinner";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/lib/animate/animate.min.css";
import "../assets/lib/owlcarousel/assets/owl.carousel.min.css";

const BookingPage = () => {
  const location = useLocation();
  const car = location.state; // 👈 pulled from navigate()

  useEffect(() => {
    const loadScripts = async () => {
      try {
        const { WOW } = await import("wowjs");
        new WOW({ live: false }).init(); // disable MutationObserver
        await import("../assets/js/main.js");
        console.log("✅ Scripts loaded for BookingPage");
      } catch (err) {
        console.error("❌ Failed to load scripts in BookingPage:", err);
      }
    };

    loadScripts();
  }, []);

  return (
    <>
      <Spinner />
      <Topbar />
      <Navbar />

      {/* Header */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Book Your Car
          </h4>
          <ol
            className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Pages</a></li>
            <li className="breadcrumb-item active text-primary">Booking</li>
          </ol>
        </div>
      </div>

      {/* Booking Section */}
      <div className="container py-5">
        <div className="row g-5">
          {/* Car Info Panel */}
          <div className="col-lg-6">
            <div className="p-4 bg-light rounded h-100">
              {car ? (
                <>
                  <img
                    src={car.image}
                    alt={car.name}
                    className="img-fluid rounded mb-3"
                  />
                  <h4>{car.name}</h4>
                  <p>{car.description || "A modern, reliable, and stylish vehicle."}</p>
                  <h5 className="text-primary">{car.price}</h5>
                </>
              ) : (
                <>
                  <h4>No Car Selected</h4>
                  <p>Please go back and select a car to reserve.</p>
                </>
              )}
            </div>
          </div>

          {/* Booking Form */}
          <div className="col-lg-6">
            <div className="bg-secondary rounded p-5">
              <h4 className="text-white mb-4">CONTINUE CAR RESERVATION</h4>
              <form>
                <div className="row g-3">
                  <div className="col-12">
                    <select className="form-select" defaultValue="">
                      <option value="">Select Your Car type</option>
                      <option>VW Golf VII</option>
                      <option>Audi A1 S-Line</option>
                      <option>Toyota Camry</option>
                      <option>BMW 320 ModernLine</option>
                    </select>
                  </div>

                  {["Pick Up", "Drop off"].map((label, i) => (
                    <div className="col-12" key={label + i}>
                      {label === "Drop off" && (
                        <a
                          href="#"
                          className="text-start text-white d-block mb-2"
                        >
                          Need a different drop-off location?
                        </a>
                      )}
                      <div className="input-group">
                        <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                          <i className="fas fa-map-marker-alt"></i>
                          <span className="ms-1">{label}</span>
                        </div>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter a City or Airport"
                        />
                      </div>
                    </div>
                  ))}

                  {["Pick Up", "Drop off"].map((label, i) => (
                    <div className="col-12" key={label + "date" + i}>
                      <div className="input-group">
                        <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                          <i className="fas fa-calendar-alt"></i>
                          <span className="ms-1">{label}</span>
                        </div>
                        <input className="form-control" type="date" />
                        <select className="form-select ms-3">
                          {[
                            "12:00AM",
                            "1:00AM",
                            "2:00AM",
                            "3:00AM",
                            "4:00AM",
                            "5:00AM",
                            "6:00AM",
                            "7:00AM",
                          ].map((time) => (
                            <option key={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ))}

                  <div className="col-12">
                    <button className="btn btn-light w-100 py-2" type="submit">
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Copyright />
    </>
  );
};

export default BookingPage;
