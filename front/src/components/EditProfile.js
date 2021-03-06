import React from "react";
import "./styles/userprofile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function EditProfile() {
  const urlParams = new URLSearchParams(window.location.search);
  const error = urlParams.get("error");
  const msg = urlParams.get("msg");
  return (
    <div className="user">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        role="navigation"
      >
        <a className="navbar-brand" href="/">
          <img
            src="./images/pika.png"
            alt="Pikachu"
            title="Pikachu"
            width="60"
          />
          PokeMongoDB
        </a>
        <Link to="/player">
          <button className="myButton2" type="button">
            Team Page
          </button>
        </Link>
        <Link to="/pokemon">
          <button className="myButton2" type="button">
            Pokemon List
          </button>
        </Link>
        <Link to="/favorites">
          <button className="myButton2" type="button">
            Favorites
          </button>
        </Link>
        <Link to="/trainerpage">
          <button className="myButton2" type="button">
            Trainer Page
          </button>
        </Link>
        <form className="form" action="/signout" method="post">
          <input
            className="myButton3"
            type="submit"
            name="signout"
            value="Sign Out"
          />
        </form>
      </nav>
      <div
        className="container-fluid d-flex justify-content-center"
        role="main"
      >
        <div className="usercard3">
          <div className="card-header" id="card-header-editp">
            <h1 className="header1">My Account</h1>
          </div>
          <div className="card-body" id="card-body-edit-prof">
            <form id="update" action="/update" method="post"></form>
            <form>
              <div className="form-group">
                <label for="username">Current Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  placeholder="Ash"
                  form="update"
                />
              </div>

              <div className="form group">
                <label for="newpassword">New Password:</label>
                <input
                  type="password"
                  id="newpassword"
                  name="newpassword"
                  className="form-control"
                  placeholder="pikachu"
                  form="update"
                />
              </div>
              {error ? <div className="danger">{error}</div> : ""}
              {msg ? `${msg}` : ""}
              <br />
              <div className="submitButtons">
                <div className="form-group">
                  <input
                    type="submit"
                    className="buttons"
                    id="updateacc"
                    value="Update Account"
                    form="update"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="links2">
          <Link to="/trainerpage">
            <button className="button4" type="button">
              Trainer Card
            </button>
          </Link>
          <Link to="/editprofile">
            <button className="button5" type="button">
              Edit Account Info
            </button>
          </Link>
          <Link to="/delete">
            <button className="button5" type="button">
              Delete Account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
