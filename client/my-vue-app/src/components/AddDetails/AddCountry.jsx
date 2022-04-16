import React from "react";
import Navbar from "../Navbar";

function AddCountry() {
  return (
    <div>
      <Navbar />
      <h1>Add Country</h1>
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

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCountry;
