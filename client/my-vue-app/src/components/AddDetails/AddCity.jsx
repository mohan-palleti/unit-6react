import React from "react";
import Navbar from "../Navbar";
import { useForm } from "react-hook-form";

function AddCity() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  // id	Country	City	Population	Edit	Delete
  // 1	India	Delhi	19,000,000	Edit	Delete
  // 2	SriLanka	Colombo	5,600,000	Edit	Delete
  // 3	USA	Chicago	2,920,000	Edit	Delete
  return (
    <div>
      {" "}
      <Navbar />
      <h1>Add City</h1>
      <form
        className="row g-3 w-50 m-auto p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-md-6">
          <label className="form-label">Country</label>
          <input
            type="text"
            className="form-control"
            placeholder="Country"
            {...register("country", { required: true })}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            placeholder="City"
            {...register("city", { required: true })}
            required
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
            {...register("population", { required: true })}
            required
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
