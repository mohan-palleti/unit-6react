import React from "react";
import Navbar from "../Navbar";

function AddCity() {
  // id	Country	City	Population	Edit	Delete
  // 1	India	Delhi	19,000,000	Edit	Delete
  // 2	SriLanka	Colombo	5,600,000	Edit	Delete
  // 3	USA	Chicago	2,920,000	Edit	Delete
  return (
    <div>
      {" "}
      <Navbar />
      <h1>Add City</h1>
      <form className="row g-3 w-50 m-auto p-4">
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Country
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Country"
          />
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
            City
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            placeholder="City"
          />
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Population
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Population"
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCity;
