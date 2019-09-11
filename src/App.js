import React, { useState, useEffect, useReducer, Fragment } from "react";
import Search from "./components/Search";
import TableHead from "./components/TableHead";
import AddNewProfile from "./components/AddNewProfile";
import TableBody from "./components/TableBody";
import { appReducer } from "./utils/Reducer";
import { ProfileContext } from "./utils/Context";
import "./styles/App.css";

export default () => {
  const [users, dispatch] = useReducer(appReducer, []);
  const [openModal, setModal] = useState(false);
  const [state, setSearch] = useState({
    search: ""
  });

  useEffect(() => {
    const raw = localStorage.getItem("registeredUserData");
    if (raw !== "") {
      dispatch({ type: "fetchInitialData", payload: JSON.parse(raw) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("registeredUserData", JSON.stringify(users));
  }, [users]);

  const closeModal = () => setModal(false);
  const handleSearch = e => {
    setSearch({ ...state, search: e.target.value });
  };
  let filteredProfile = users.filter(
    user => user.name.toLowerCase().indexOf(state.search.toLowerCase()) !== -1
  );
  return (
    <Fragment>
      <ProfileContext.Provider value={dispatch}>
        <div className="container">
          <div className="d-flex mt-5 mb-3">
            <button
              className="btn btn-success mr-auto"
              onClick={() => setModal(true)}
            >
              Add New Profile
            </button>
            <Search handleSearch={handleSearch} />
          </div>
          <table className="table">
            <TableHead />
            {filteredProfile.map((user, index) => (
              <TableBody key={index} user={user} />
            ))}
          </table>
        </div>
        {openModal ? <AddNewProfile closeModal={closeModal} /> : null}
      </ProfileContext.Provider>
    </Fragment>
  );
};
