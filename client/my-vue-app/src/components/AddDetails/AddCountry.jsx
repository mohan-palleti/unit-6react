import React from "react";
import Navbar from "../Navbar";
import { useForm } from "react-hook-form";
function AddCountry() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Navbar />
      <h1>Add Country</h1>
      <form
        className="row g-3 w-50 m-auto p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-md-6">
          <label className="form-label">Country</label>
          <input
            type="text"
            className="form-control"
            id="inputEmail4"
            placeholder="Country"
            required
            {...register("country", { required: true })}
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
