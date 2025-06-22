import React, { useEffect } from "react";
import Spinner from "../components/Spinner";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";

const carList = [
  {
    id: 1,
    name: "VW Golf VII",
    desc: "A compact car with great fuel economy and comfort.",
  },
  {
    id: 2,
    name: "Audi A1 S-Line",
    desc: "Luxury mini with advanced features and sporty drive.",
  },
  {
    id: 3,
    name: "Toyota Camry",
    desc: "Reliable mid-size sedan perfect for families and business trips.",
  },
  {
    id: 4,
    name: "BMW 320 ModernLine",
    desc: "Executive class ride with premium performance and comfort.",
  },
];

const BookingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Spinner />
      <Topbar />
      <Navbar />

      {/* Header */}
      <div className="container-fluid bg-breadcrumb mb-5">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4 className="text-white display-4 mb-4">Book Your Car</h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active text-primary">Booking</li>
          </ol>
        </div>
      </div>

      {/* Booking Content */}
      <div className="container py-5">
        <div className="row g-5">
          {/* Car Options (Left Side) */}
          <div className="col-lg-6">
            <h3 className="mb-4">Choose Your Car</h3>
            {carList.map((car) => (
              <div key={car.id} className="bg-light p-4 mb-4 rounded shadow-sm">
                <h5 className="text-primary">{car.name}</h5>
                <p className="mb-0">{car.desc}</p>
              </div>
            ))}
          </div>

          {/* Booking Form (Right Side) */}
          <div className="col-lg-6">
            <div className="bg-secondary rounded p-5">
              <h4 className="text-white mb-4">CONTINUE CAR RESERVATION</h4>
              <form>
                <div className="row g-3">
                  {/* Car Type Dropdown */}
                  <div className="col-12">
                    <select className="form-select">
                      <option>Select Your Car type</option>
                      {carList.map((car) => (
                        <option key={car.id} value={car.id}>
                          {car.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Pickup and Drop-off Inputs */}
                  {["Pick Up", "Drop off"].map((label, i) => (
                    <div className="col-12" key={label + i}>
                      {label === "Drop off" && (
                        <a href="#" className="text-white d-block mb-2">
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

                  {/* Date and Time Inputs */}
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
                            "12:00AM", "1:00AM", "2:00AM", "3:00AM",
                            "4:00AM", "5:00AM", "6:00AM", "7:00AM",
                          ].map((time) => (
                            <option key={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ))}

                  <div className="col-12">
                    <button className="btn btn-light w-100 py-2">
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
