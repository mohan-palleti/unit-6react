import React from "react";

function Buttons() {
  return (
    <div>
      <select
        name="country_filter"
        className="form-select w-25 m-auto"
        id="country_filter"
      >
        <option value="">Filter By Country</option>
        <option value="india">india</option>
        <option value="srilanka">SriLanka</option>
        <option value="pakistan">Pakistan</option>
        <option value="bagladesh">Bangladesh</option>
        <option value="nepal">Nepal</option>
      </select>
      <button className="btn btn-secondary m-2">Sort By Population</button>
    </div>
  );
}

export default Buttons;
