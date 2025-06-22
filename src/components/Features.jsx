import React from "react";
import featuresImg from "../assets/img/featuresimg.jpg";

const Features = () => {
  const featuresLeft = [
    {
      icon: "fa-trophy",
      title: "First Class Services",
      description:
        "We provide top-tier service tailored to your needs — with attention to detail, comfort, and excellence at every step.",
    },
    {
      icon: "fa-road",
      title: "24/7 Road Assistance",
      description:
        "Wherever you are, whenever you need us — our support team is on standby to keep your journey smooth and stress-free.",
    },
  ];

  const featuresRight = [
    {
      icon: "fa-tag",
      title: "Quality at Minimum",
      description:
        "Enjoy premium service and experiences without stretching your budget — quality doesn’t have to come at a high price.",
    },
    {
      icon: "fa-map-pin",
      title: "Free Pick-Up & Drop-Off",
      description:
        "We offer complimentary pick-up and drop-off services to make your travel experience smooth from start to finish — no extra fees, no hassle.",
    },
  ];

  const renderFeatureItem = (feature, alignRight = false) => (
    <div className="col-12 wow fadeInUp" data-wow-delay="0.1s" key={feature.title}>
      <div className={`feature-item d-flex ${alignRight ? "justify-content-end" : ""}`}>
        {!alignRight && (
          <div className="feature-icon">
            <span className={`fa ${feature.icon} fa-2x`}></span>
          </div>
        )}
        <div className={`${alignRight ? "text-end me-4" : "ms-4"}`}>
          <h5 className="mb-3">{feature.title}</h5>
          <p className="mb-0">{feature.description}</p>
        </div>
        {alignRight && (
          <div className="feature-icon">
            <span className={`fa ${feature.icon} fa-2x`}></span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="container-fluid feature py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "800px" }}
        >
          <h1 className="display-5 text-capitalize mb-3">
            Walter Tour <span className="text-primary">Features</span>
          </h1>
          <p className="mb-0">
            Walter Tour Company crafts personalized journeys guided by passionate
            locals who turn destinations into stories. Enjoy seamless comfort, offbeat
            adventures, and all-inclusive pricing with no hidden costs. Our trips offer
            fast-track access, 24/7 support, and are designed to be eco-friendly,
            family-ready, and senior-safe. We go beyond sightseeing with a culture-first
            approach, creating travel that connects, not just transports.
          </p>
        </div>

        <div className="row g-4 align-items-center">
          <div className="col-xl-4">
            <div className="row gy-4 gx-0">
              {featuresLeft.map((feature) => renderFeatureItem(feature))}
            </div>
          </div>

          <div className="col-lg-12 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
            <img
              src={featuresImg}
              className="img-fluid w-100"
              style={{ objectFit: "cover" }}
              alt="Features"
            />
          </div>

          <div className="col-xl-4">
            <div className="row gy-4 gx-0">
              {featuresRight.map((feature) => renderFeatureItem(feature, true))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
