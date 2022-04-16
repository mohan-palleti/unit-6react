import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Actions/action";
import axios from "axios";

function Table() {
  const dispatch = useDispatch();
  const [sort, setSort] = useState(false);
  const CityData = useSelector((state) => state.cityReducer.cities);
  //console.log(CityData);

  const [citiesData, setCitiesData] = useState(CityData);
  useEffect(() => {
    axios.get("http://localhost:3004/cities").then((res) => {
      console.log("fetching success", res.data);
      //setCitiesData(res.data);
      dispatch(getData(res.data));
      setCitiesData(res.data);
    });
  }, []);
  useEffect(() => {
    setCitiesData(CityData);
  }, [sort]);
  let data = useSelector((state) => state.cityReducer.cities);
  function sortPopulation() {
    data = data.sort((a, b) => a.population - b.population);
    console.log(data);
    setSort(!sort);
    dispatch(getData(data));
  }

  return (
    <div>
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
        <button
          className="btn btn-secondary m-2"
          onClick={() => {
            sortPopulation();
          }}
        >
          Sort By Population
        </button>
      </div>
      <table className="table w-75 m-auto">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Country</th>
            <th scope="col">City</th>
            <th scope="col">Population </th>
            <th scope="col">Edit </th>
            <th scope="col">Delete </th>
          </tr>
        </thead>
        <tbody>
          {citiesData.map((ele) => (
            <>
              <tr key={ele.id}>
                <th scope="row">{ele.id}</th>
                <td>{ele.country}</td>
                <td>{ele.city}</td>
                <td>{ele.population}</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            </>
          ))}
          {/* <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
