import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faMoneyBillAlt,
  faRoad,
  faUmbrella,
  faBuilding,
  faCarAlt
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faPhoneAlt,
    title: "Phone Reservation",
    delay: "0.1s",
    description: "Call us 24/7 to instantly book a car — fast, friendly, no app required."
  },
  {
    icon: faMoneyBillAlt,
    title: "Special Rates",
    delay: "0.3s",
    description: "Unlock discounted pricing for long-term rentals and early bookings."
  },
  {
    icon: faRoad,
    title: "One Way Rental",
    delay: "0.5s",
    description: "Pick up in one city and drop off in another — no round trip needed."
  },
  {
    icon: faUmbrella,
    title: "Life Insurance",
    delay: "0.1s",
    description: "Optional life coverage included for your complete peace of mind."
  },
  {
    icon: faBuilding,
    title: "City to City",
    delay: "0.3s",
    description: "Travel between major cities with ease and reliability."
  },
  {
    icon: faCarAlt,
    title: "Free Rides",
    delay: "0.5s",
    description: "Get complimentary rides as part of our loyalty & referral programs."
  }
];

const Services = () => {
  return (
    <div className="container-fluid service py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "800px" }}
        >
          <h1 className="display-5 text-capitalize mb-3">
            Walter Tours <span className="text-primary">Services</span>
          </h1>
          <p className="mb-0">
            We provide everything you need for a smooth rental experience — from quick bookings and competitive pricing
            to flexible travel options and personal support, 24/7.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay={service.delay}
              key={index}
            >
              <div className="service-item p-4">
                <div className="service-icon mb-4 text-primary">
                  <FontAwesomeIcon icon={service.icon} className="fa-2x" />
                </div>
                <h5 className="mb-3">{service.title}</h5>
                <p className="mb-0">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
