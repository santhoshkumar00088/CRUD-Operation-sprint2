import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditPlacement() {
  let navigate = useNavigate();
  const { id } = useParams();
  
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

  useEffect(() => {
    loadPlacement();
  }, [id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/placement/${id}`, placement);
      navigate("/");
    } catch (error) {
      console.error("There was an error updating the placement!", error);
      // Optionally, you can set some state here to display an error message to the user
    }
  };

  const loadPlacement = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/placement/${id}`);
      setPlacement(result.data);
    } catch (error) {
      console.error("There was an error fetching the placement data!", error);
      // Optionally, handle errors by setting state to show a message to the user
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Placement Details</h2>
          <form onSubmit={onSubmit}>
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
              className="btn btn-outline-danger mx-2"
              to='/'
            >
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
