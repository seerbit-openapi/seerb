import React, { useState, useContext } from "react";
import { ProfileContext } from "../utils/Context";

export default ({ closeModal }) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    birthDate: ""
  });

  const dispatch = useContext(ProfileContext);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: "addNewProfile",
      name: state.name,
      email: state.email,
      phone: state.phone,
      country: state.country,
      birthDate: state.birthDate
    });
    closeModal();
  };

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <div className="modal">
      <div className="card" style={{ width: "50%" }}>
        <div className="card-body">
          <h5 className="card-title">Add New Profile</h5>
          <div className="card-text mt-3 mb-3">
            <form onSubmit={handleSubmit}>
              <p>
                <input
                  type="text"
                  name="name"
                  placeholder="Type your name"
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                <input
                  type="email"
                  name="email"
                  placeholder="Type your email address"
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Type your phone number"
                  onChange={handleChange}
                  required
                />
              </p>
              <p>
                <select
                  name="country"
                  onChange={handleChange}
                  className=" btn dropdown-toggle"
                  defaultValue=""
                  required
                >
                  <option disabled value="">
                    Select your country
                  </option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Ghana">Ghana</option>
                  <option value="UK">UK</option>
                </select>
              </p>
              <p>
                <input
                  type="date"
                  name="birthDate"
                  placeholder="Select your birth date"
                  onChange={handleChange}
                  required
                />
              </p>
              <button className="btn btn-success" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
