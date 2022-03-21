import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch(
      `https://digi-notes.herokuapp.com/api/auth/creatUser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      history.push("/");
      props.showAlert("Account created successfully", "success");
    } else {
      props.showAlert("Invalid credentials", "danger");
    }
  };

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <section className="vh-90 ">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid my-2"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={credentials.name}
                    aria-describedby="emailHelp"
                    onChange={onchange}
                  />
                  <label className="form-label" htmlFor="form1Example13">
                    Name
                  </label>
                </div>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={credentials.email}
                    aria-describedby="emailHelp"
                    onChange={onchange}
                    autoComplete="off"
                  />
                  <label className="form-label" htmlFor="form1Example13">
                    Email address
                  </label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={credentials.password}
                    name="password"
                    onChange={onchange}
                    autoComplete="off"
                  />
                  <label className="form-label" htmlFor="form1Example23">
                    Password
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={handleSubmit}
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
