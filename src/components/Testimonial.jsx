import React from "react";

const testimonials = [
  {
    image: "img/testimonial-1.jpg",
    name: "Person Name",
    profession: "Profession",
    stars: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae reprehenderit ipsum eos cumque esse repellendus impedit."
  },
  {
    image: "img/testimonial-2.jpg",
    name: "Person Name",
    profession: "Profession",
    stars: 3,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae reprehenderit ipsum eos cumque esse repellendus impedit."
  },
  {
    image: "img/testimonial-3.jpg",
    name: "Person Name",
    profession: "Profession",
    stars: 2,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae reprehenderit ipsum eos cumque esse repellendus impedit."
  }
];

const Testimonial = () => {
  return (
    <section className="testimonial py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5"
          style={{ maxWidth: "800px" }}
        >
          <h1 className="display-5 text-capitalize mb-3">
            Our Clients<span className="text-primary"> Riviews</span>
          </h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet
            nemo expedita asperiores commodi accusantium at cum harum,
            excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam
            quia distinctio,
          </p>
        </div>
        <div className="row g-4">
          {testimonials.map((t, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="testimonial-item border rounded">
                <div className="testimonial-quote p-3 text-end">
                  <i className="fa fa-quote-right fa-2x" />
                </div>
                <div className="testimonial-inner d-flex p-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <div className="ms-4">
                    <h4>{t.name}</h4>
                    <p>{t.profession}</p>
                    <div className="d-flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fas fa-star${
                            i < t.stars ? "" : " text-body"
                          }`}
                        ></i>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="border-top p-4">
                  <p className="mb-0">{t.review}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
