import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function AddPlacement() {
  let navigate = useNavigate();

  const [placement, setPlacement] = useState({
    companyname: "",
    jobtitle: "",
    placementdate: "",
    studentid: ""
  });

  const { companyname, jobtitle, placementdate, studentid } = placement;

  const onInputChange = (e) => {
    setPlacement({ ...placement, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/placement", placement);
      navigate("/");
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Placement Details</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="companyname" className="form-label">
                Company Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Company Name"
                name="companyname"
                value={companyname}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="jobtitle" className="form-label">
                Job Title
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Job Title"
                name="jobtitle"
                value={jobtitle}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="placementdate" className="form-label">
                Placement Date
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Placement Date"
                name="placementdate"
                value={placementdate}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="studentid" className="form-label">
                Student ID
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Student ID"
                name="studentid"
                value={studentid}
                onChange={onInputChange}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link
              type="button"
              className="btn btn-outline-danger mx-2" to='/'
              onClick={() => navigate("/")}
            >
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
