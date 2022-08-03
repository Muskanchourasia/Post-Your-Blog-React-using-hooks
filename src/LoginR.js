import React from "react";
import { useState } from "react";
import { withRouter } from "react-router";

function LoginUi(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    if (
      email === JSON.parse(localStorage.getItem("email")) &&
      password === JSON.parse(localStorage.getItem("password"))
    ) {
      props.history.push("/Nav");
    }
  }

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image"></div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <label className="form-label" htmlFor="Email">
                Email address:
              </label>
              <br />

              <input
                type="text"
                placeholder="Enter your used ID or email"
                className="name"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <br />
            <div className="second-input">
              <label className="form-label" htmlFor="password">
                Password:
              </label>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="name"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <br />
            <div className="login-button">
              <button onClick={handleClick}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(LoginUi);
