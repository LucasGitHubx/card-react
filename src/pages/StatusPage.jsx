import User from "../components/User";
import { useContext } from "react";
import { Context } from "../App";
import "./statusPage.css";

export default function StatusPage() {
  const [person] = useContext(Context);

  return (
    <div className="status-page">
      {person.length == 0 ? (
        <h1>There are no users yet...</h1>
      ) : (
        <div className="users">
          {person.map((user) => {
            return <User user={user} />;
          })}
        </div>
      )}
    </div>
  );
}
