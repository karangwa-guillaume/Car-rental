import React from "react";

const teamMembers = [
  {
    name: "MARTIN DOE",
    role: "Profession",
    image: "img/team-1.jpg",
    delay: "0.1s"
  },
  {
    name: "MARTIN DOE",
    role: "Profession",
    image: "img/team-2.jpg",
    delay: "0.3s"
  },
  {
    name: "MARTIN DOE",
    role: "Profession",
    image: "img/team-3.jpg",
    delay: "0.5s"
  },
  {
    name: "MARTIN DOE",
    role: "Profession",
    image: "img/team-4.jpg",
    delay: "0.7s"
  }
];

const Team = () => {
  return (
    <div className="container-fluid team pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "800px" }}
        >
          <h1 className="display-5 text-capitalize mb-3">
            Customer<span className="text-primary"> Suport</span> Center
          </h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo
            expedita asperiores commodi accusantium at cum harum, excepturi, quia
            tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
          </p>
        </div>
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay={member.delay}
              key={index}
            >
              <div className="team-item p-4 pt-0">
                <div className="team-img">
                  <img
                    src={member.image}
                    className="img-fluid rounded w-100"
                    alt={member.name}
                  />
                </div>
                <div className="team-content pt-4 text-center">
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                  <div className="team-icon d-flex justify-content-center">
                    <a className="btn btn-square btn-light rounded-circle mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square btn-light rounded-circle mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square btn-light rounded-circle mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a className="btn btn-square btn-light rounded-circle mx-1" href="">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
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

export default Team;
