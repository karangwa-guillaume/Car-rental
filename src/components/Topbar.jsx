import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

const Topbar = () => {
  return (
    <div className="container-fluid topbar bg-secondary d-none d-xl-block w-100">
      <div className="container">
        <div className="row gx-0 align-items-center" style={{ height: "45px" }}>
          <div className="col-lg-6 text-center text-lg-start mb-lg-0">
            <div className="d-flex flex-wrap">
              <a href="#" className="text-muted me-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary me-2" />
                Find A Location
              </a>
              <a href="tel:+01234567890" className="text-muted me-4">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-primary me-2" />
                +250788213386,  +250788328111

              </a>
              <a href="mailto:example@gmail.com" className="text-muted me-0">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary me-2" />
                dannynshaija8@gmail.com
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-end">
            <div className="d-flex align-items-center justify-content-end">
              <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="btn btn-light btn-sm-square rounded-circle me-0">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
