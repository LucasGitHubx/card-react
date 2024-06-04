import { useState, useContext } from "react";
import { Context } from "../App";
import "./user.css";

export default function User({ user }) {
  const [person, setPerson] = useContext(Context);
  const [editMode, setEditMode] = useState(false);

  function handleDelete(e) {
    e.preventDefault();
    setPerson((prev) => {
      const temp = person.filter((person) => person.id != user.id);
      return temp;
    });
  }

  return (
    <div className="user">
      <div className="information">
        <p className="name">{user.name}</p>
        <p className="number">{user.number}</p>
      </div>
      <div className="buttons">
        <button id="delete" onClick={(e) => handleDelete(e)}>
          Delete
        </button>
      </div>
    </div>
  );
}
