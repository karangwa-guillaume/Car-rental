import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
      <div className="container py-5">
        <div className="row g-5">
          {/* About & Subscription */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4">About Us</h4>
              <p className="mb-3">
                Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="position-relative">
                <input
                  className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email"
                />
                <button
                  type="button"
                  className="btn btn-secondary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                  aria-label="Subscribe"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4">Quick Links</h4>
              {[
                "About",
                "Cars",
                "Car Types",
                "Team",
                "Contact Us",
                "Terms & Conditions",
              ].map((link, idx) => (
                <a href="#" key={idx} className="text-white-50">
                  <i className="fas fa-angle-right me-2"></i> {link}
                </a>
              ))}
            </div>
          </div>

          {/* Business Hours */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4">Business Hours</h4>
              <div className="mb-3">
                <h6 className="text-muted mb-0">Mon - Friday:</h6>
                <p className="text-white mb-0">09:00 am to 07:00 pm</p>
              </div>
              <div className="mb-3">
                <h6 className="text-muted mb-0">Saturday:</h6>
                <p className="text-white mb-0">10:00 am to 05:00 pm</p>
              </div>
              <div className="mb-3">
                <h6 className="text-muted mb-0">Vacation:</h6>
                <p className="text-white mb-0">Sunday is our vacation</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4">Contact Info</h4>
              <a href="#" className="text-white-50">
                <i className="fa fa-map-marker-alt me-2"></i> 123 Street, New York, USA
              </a>
              <a href="mailto:info@example.com" className="text-white-50">
                <i className="fas fa-envelope me-2"></i> info@example.com
              </a>
              <a href="tel:+01234567890" className="text-white-50">
                <i className="fas fa-phone me-2"></i> +012 345 67890
              </a>
              <a href="tel:+01234567890" className="mb-3 text-white-50">
                <i className="fas fa-print me-2"></i> +012 345 67890
              </a>
              <div className="d-flex">
                {["facebook-f", "twitter", "instagram", "linkedin-in"].map((platform, index) => (
                  <a
                    key={index}
                    className="btn btn-secondary btn-md-square rounded-circle me-3"
                    href="#"
                    aria-label={platform}
                  >
                    <i className={`fab fa-${platform} text-white`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
