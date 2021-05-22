import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/styles.css";

const Signup = () => {
  return (
    <>
      <div className="card signup">
        <div className="card-body">
          <h5 className="card-title signup-form-control">
            Signup for free access to
            <br /> a community of knowledge!
          </h5>
          <form>
            <input
              className="form-control form-control-sm signup-form-control"
              type="text"
              placeholder="Enter your Full Name"
              aria-label="default input example"
            ></input>
            <input
              className="form-control form-control-sm signup-form-control"
              type="text"
              placeholder="Create a Username for yourself"
              aria-label="default input example"
            ></input>

            <div className="row g-3 signup-form-control">
              <div className="col-auto">
                <label for="inputPassword2" className="visually-hidden">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  id="inputPassword2"
                  placeholder="Set Password"
                />
              </div>
              <div className="col-auto">
                <label for="inputPassword2" className="visually-hidden">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  id="inputPassword2"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <input
              className="form-control form-control-sm signup-form-control"
              type="email"
              placeholder="Enter a valid email address!"
              aria-label="default input example"
            ></input>
            <div class="form-check signup-form-control">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <button type="button" class="btn btn-link btn-sm">
                I agree to the Terms and Condition
              </button>
            </div>
            <button
              type="button"
              className="btn btn-primary btn-sm signup-form-control"
            >
              Sign up!
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
