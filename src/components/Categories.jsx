import React from "react";
import { useNavigate } from "react-router-dom"; // 👈 Add this
import car1 from "../assets/img/car-1.png";
import car2 from "../assets/img/car-2.png";
import car3 from "../assets/img/car-3.png";
import car4 from "../assets/img/car-4.png";

const carData = [
  {
    name: "Mercedes Benz R3",
    image: car1,
    review: 4.5,
    price: "$99:00/Day",
    description: "Elegant and comfortable sedan for everyday use."
  },
  {
    name: "Toyota Corolla Cross",
    image: car2,
    review: 3.5,
    price: "$128:00/Day",
    description: "A family SUV with smooth ride and fuel efficiency."
  },
  {
    name: "Tesla Model S Plaid",
    image: car3,
    review: 3.8,
    price: "$170:00/Day",
    description: "High-performance electric car with cutting-edge tech."
  },
  {
    name: "Hyundai Kona Electric",
    image: car4,
    review: 4.8,
    price: "$187:00/Day",
    description: "Eco-friendly electric crossover with spacious interior."
  },
];

const features = [
  { icon: "fa-users", label: "4 Seat" },
  { icon: "fa-car", label: "AT/MT" },
  { icon: "fa-gas-pump", label: "Petrol" },
  { icon: "fa-car", label: "2015" },
  { icon: "fa-cogs", label: "AUTO" },
  { icon: "fa-road", label: "27K" },
];

const Categories = () => {
  const navigate = useNavigate(); // 👈 Hook for navigation

  const handleBooking = (car) => {
    navigate("/booking", { state: car });
  };

  return (
    <div className="container-fluid categories pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "800px" }}
        >
          <h1 className="display-5 text-capitalize mb-3">
            Vehicle <span className="text-primary">Categories</span>
          </h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet
            nemo expedita asperiores commodi accusantium at cum harum, excepturi.
          </p>
        </div>

        <div className="row g-4">
          {carData.map((car, index) => (
            <div className="col-lg-3" key={index}>
              <div className="categories-item p-4">
                <div className="categories-item-inner">
                  <div className="categories-img rounded-top">
                    <img
                      src={car.image}
                      className="img-fluid w-100 rounded-top"
                      alt={car.name}
                    />
                  </div>
                  <div className="categories-content rounded-bottom p-4">
                    <h4>{car.name}</h4>
                    <div className="categories-review mb-4">
                      <div className="me-3">{car.review} Review</div>
                      <div className="d-flex justify-content-center text-secondary">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <i
                            key={star}
                            className={`fas fa-star ${
                              star <= Math.round(car.review)
                                ? ""
                                : "text-body"
                            }`}
                          ></i>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">
                        {car.price}
                      </h4>
                    </div>
                    <div className="row gy-2 gx-0 text-center mb-4">
                      {features.map((feature, i) => (
                        <div
                          className={`col-4 ${
                            i % 3 !== 2 ? "border-end border-white" : ""
                          }`}
                          key={i}
                        >
                          <i className={`fa ${feature.icon} text-dark`}></i>{" "}
                          <span className="text-body ms-1">{feature.label}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      className="btn btn-primary rounded-pill d-flex justify-content-center py-3 w-100"
                      onClick={() => handleBooking(car)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
