import React, { useEffect } from "react";

// CSS Imports
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/lib/animate/animate.min.css";
import "../assets/lib/owlcarousel/assets/owl.carousel.min.css";

// JS + Plugins
import $ from "jquery";
import WOW from "wowjs";
import "owl.carousel";

// Expose for legacy scripts
window.$ = $;
window.jQuery = $;
window.WOW = WOW.WOW;

// Components
import Spinner from "../components/Spinner";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const ContactPage = () => {
  useEffect(() => {
  const loadScripts = async () => {
    try {
      // Make jQuery globally available
      const $ = (await import("jquery")).default;
      window.$ = $;
      window.jQuery = $;

      // Load plugins after jQuery
      await import("../assets/lib/waypoints/waypoints.min.js");
      await import("../assets/lib/counterup/counterup.min.js");
      await import("../assets/lib/owlcarousel/owl.carousel.min.js");

      // Patch getComputedStyle to avoid WOW crash
      const originalGetComputedStyle = window.getComputedStyle;
      window.getComputedStyle = function (el) {
        if (!el) return { getPropertyValue: () => "" };
        return originalGetComputedStyle(el);
      };

      // Initialize WOW.js
      const { WOW } = await import("wowjs");
      window.WOW = WOW;
      new WOW().init();

      // Load main.js
      await import("../assets/js/main.js");

      console.log("✅ Scripts loaded successfully");
    } catch (error) {
      console.error("❌ Script load failed:", error);
    }
  };

  loadScripts();
  window.scrollTo(0, 0);
}, []);


  return (
    <>
      <Spinner />
      <Topbar />
      <Navbar />

      {/* Header Section */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Contact Us</h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Pages</a></li>
            <li className="breadcrumb-item active text-primary">Contact</li>
          </ol>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 800 }}>
            <h1 className="display-5 text-capitalize text-primary mb-3">Contact Us</h1>
            <p className="mb-0">
              The contact form is currently inactive. You can set up a functional form with Ajax & PHP.
              <a href="https://htmlcodex.com/contact-form" className="text-primary fw-bold"> Download Now</a>.
            </p>
          </div>

          {/* Contact Info */}
          <div className="row g-5">
            <div className="col-12">
              <div className="row g-5">
                {[
                  { icon: "fas fa-map-marker-alt", title: "Address", content: "123 Street New York.USA" },
                  { icon: "fas fa-envelope", title: "Mail Us", content: "info@example.com" },
                  { icon: "fa fa-phone-alt", title: "Telephone", content: "(+012) 3456 7890" },
                  { icon: "fab fa-firefox-browser", title: "Website", content: "yoursite@ex.com" },
                ].map((item, idx) => (
                  <div key={idx} className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay={`0.${idx + 1}s`}>
                    <div className="contact-add-item p-4 bg-light rounded">
                      <div className="contact-icon mb-4">
                        <i className={`${item.icon} fa-2x`}></i>
                      </div>
                      <div>
                        <h4>{item.title}</h4>
                        <p className="mb-0">{item.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="bg-secondary p-5 rounded">
                <h4 className="text-primary mb-4">Send Your Message</h4>
                <form>
                  <div className="row g-4">
                    {["name", "email", "phone", "project", "subject"].map((field, i) => (
                      <div key={field} className={`col-lg-6`}>
                        <div className="form-floating">
                          <input type="text" className="form-control" id={field} placeholder={field} />
                          <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                        </div>
                      </div>
                    ))}
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: 160 }}></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-light w-100 py-3" type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Social Icons */}
            <div className="col-12 col-xl-1 wow fadeInUp" data-wow-delay="0.3s">
              <div className="d-flex flex-xl-column align-items-center justify-content-center">
                {["facebook-f", "twitter", "instagram", "linkedin-in"].map((social, i) => (
                  <a key={i} className="btn btn-xl-square btn-light rounded-circle mb-0 mb-xl-4 me-4 me-xl-0" href="#">
                    <i className={`fab fa-${social}`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Branches */}
            <div className="col-12 col-xl-5 wow fadeInUp" data-wow-delay="0.1s">
              <div className="p-5 bg-light rounded">
                {[1, 2, 3].map((branch) => (
                  <div key={branch} className="bg-white rounded p-4 mb-4">
                    <h4 className="mb-3">Our Branch 0{branch}</h4>
                    <div className="d-flex align-items-center mb-3">
                      <p className="mb-0 text-dark me-2">Address:</p>
                      <i className="fas fa-map-marker-alt text-primary me-2"></i>
                      <p className="mb-0">123 Street New York.USA</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="mb-0 text-dark me-2">Telephone:</p>
                      <i className="fa fa-phone-alt text-primary me-2"></i>
                      <p className="mb-0">(+012) 3456 7890</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Map */}
            <div className="col-12">
              <div className="rounded">
                <iframe
                  className="rounded w-100"
                  style={{ height: 400 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Copyright />
    </>
  );
};

export default ContactPage;
