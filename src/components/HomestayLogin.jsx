import React, { useState } from "react";

const HomestayLogin = () => {
  const [inputField, setInputField] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (event) => {
    setInputField({ ...inputField, [event.target.name]: event.target.value });
  };

  const readVal = () => {
    console.log(inputField);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3 card">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                <label htmlFor="" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={inputField.email}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                <label htmlFor="" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={inputField.password}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={readVal} className="btn btn-warning">
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomestayLogin;
