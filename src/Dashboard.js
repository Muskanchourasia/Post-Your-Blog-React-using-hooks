import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";

function Nav(props) {
  const [user, setUser] = useState([]);
  const [textInput, settextInput] = useState("");
  const [flag, setFlag] = useState(0);

  function deleteuser(event) {
    user.splice(event.target.value, 1);
    if (flag === 1) {
      setFlag(0);
    } else {
      setFlag(1);
    }
  }
  function handleClick(event) {
    if (user !== "") {
      setUser((initialArray) => [...initialArray, textInput]);
    } else {
      setUser(textInput);
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="javascript:void(0)"
            id="welcome"
          ></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  Create Post
                </a>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </nav>
      <div style={{ textAlign: "center" }}>
        <h1>Add Post</h1>
      </div>
      <div className="container"></div>
      <div style={{ margin: "100px", marginLeft: "600px" }}>
        <input
          type="text area"
          placeholder="Post Your Blog Here....."
          style={{ height: "400px", width: "650px" }}
          onChange={(event) => settextInput(event.target.value)}
        />
      </div>
      <div>
        <button style={{ marginLeft: "750px" }} onClick={handleClick}>
          Post
        </button>
      </div>
      {user.map((user, index) => (
        <Card style={{ width: "26rem", marginLeft: "200px" }}>
          <Card.Body>
            <Card.Title>Post</Card.Title>
            <Card.Text>{user}</Card.Text>
            <Button variant="danger" value={index} onClick={deleteuser}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
export default Nav;
