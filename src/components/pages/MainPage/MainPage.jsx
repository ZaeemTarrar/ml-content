import React from "react";
import { Link } from "react-router-dom";

const MainPage = (props) => {
  return (
    <>
      <div className="container">
        <div>
          <center>
            <h1>Artificial Intelligence</h1>
          </center>
          <hr />
          <br />
        </div>
        <div>
          <Link to="/practice">
            <button className="btn btn-primary">Practice Page</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainPage;
