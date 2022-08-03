import React from "react";
import { useState } from "react";
import { withRouter } from "react-router";

function SignupUi(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  function handleClick() {
    localStorage.setItem("name", JSON.stringify(username));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(password));
    localStorage.setItem("number", JSON.stringify(number));
    if (username !== "" && email !== "" && password !== "" && number !== "") {
      props.history.push("/loginUi");
    }
  }

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <h1>SignUp Page</h1>

          <div>
            <label className="form-label" htmlFor="Username">
              Username
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter your name"
              className="name"
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <br />

          <div>
            <label className="form-label" htmlFor="Email">
              Email address:
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter your ID or email"
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

          <div>
            <label className="form-label" htmlFor="Number">
              Mobile no.:
            </label>
            <br />
            <input
              type="number"
              placeholder="Enter your mobile no."
              className="name"
              onChange={(event) => setNumber(event.target.value)}
            />
          </div>
          <br />

          <div className="Submit-button">
            <button onClick={handleClick}> Submit </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(SignupUi);
