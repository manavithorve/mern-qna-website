import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/styles.css";

const Login = () => {
  return (
    <>
      <div className="card login">
        <div className="card-body">
          <h5 className="card-title card-form-control">Already Signed up? </h5>
          <form>
            <input
              class="form-control form-control-sm card-form-control"
              type="text"
              placeholder="Username"
              aria-label="default input example"
            ></input>
            <input
              class="form-control form-control-sm card-form-control"
              type="text"
              placeholder="Password"
              aria-label="default input example"
            ></input>
            <button type="button" class="btn btn-primary btn-sm">
              Login
            </button>
            <br />
            <button type="button" class="btn btn-link btn-sm">
              Forgot Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
