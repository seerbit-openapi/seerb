import React, { useContext } from "react";
import { ProfileContext } from "../utils/Context";

export default ({ user }) => {
  const dispatch = useContext(ProfileContext);
  const handleDelete = () => {
    dispatch({ type: "removeFromList", id: user.id });
  };
  return (
    <tbody>
      <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.country}</td>
        <td>{user.birthDate}</td>
        <td>
          <button className="btn btn-warning" onClick={handleDelete}>
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};
