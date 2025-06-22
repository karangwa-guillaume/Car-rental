import React from "react";

const FactCounter = () => {
  const counters = [
    {
      icon: "fa-thumbs-up",
      value: 829,
      label: "Happy Clients",
      delay: "0.1s"
    },
    {
      icon: "fa-car-alt",
      value: 56,
      label: "Number of Cars",
      delay: "0.3s"
    },
    {
      icon: "fa-building",
      value: 127,
      label: "Car Center",
      delay: "0.5s"
    },
    {
      icon: "fa-clock",
      value: 589,
      label: "Total kilometers",
      delay: "0.7s"
    }
  ];

  return (
    <div className="container-fluid counter bg-secondary py-5">
      <div className="container py-5">
        <div className="row g-5">
          {counters.map((item, index) => (
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay={item.delay}
              key={index}
            >
              <div className="counter-item text-center">
                <div className="counter-item-icon mx-auto">
                  <i className={`fas ${item.icon} fa-2x`}></i>
                </div>
                <div className="counter-counting my-3">
                  <span className="text-white fs-2 fw-bold">{item.value}</span>
                  <span className="h1 fw-bold text-white">+</span>
                </div>
                <h4 className="text-white mb-0">{item.label}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FactCounter;
