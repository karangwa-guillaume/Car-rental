import React from "react";

const Copyright = () => {
  return (
    <>
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-md-6 text-center text-md-start mb-md-0">
              <span className="text-body">
                <a href="#" className="border-bottom text-white">
                  <i className="fas fa-copyright text-light me-2"></i>Your Site Name
                </a>
                , All right reserved.
              </span>
            </div>
           
          </div>
        </div>
      </div>

      <a
        href="#"
        className="btn btn-secondary btn-lg-square rounded-circle back-to-top"
      >
        <i className="fa fa-arrow-up"></i>
      </a>
    </>
  );
};

export default Copyright;
